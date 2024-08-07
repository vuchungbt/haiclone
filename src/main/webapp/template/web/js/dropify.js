/*!
 * =============================================================
 * dropify v0.2.0 - Override your input files with style.
 * https://github.com/JeremyFagis/dropify
 *
 * (c) 2016 - Jeremy FAGIS <jeremy@fagis.fr> (http://fagis.fr)
 * =============================================================
 */

!function(i, e) {
    "function" == typeof define && define.amd ? define(["jquery"], e) : "object" == typeof exports ? module.exports = e(require("jquery")) : i.Dropify = e(i.jQuery)
}(this, function(i) {
    function e(e, t) {
        if (window.File && window.FileReader && window.FileList && window.Blob) {
            var s = {
                defaultFile: "",
                maxFileSize: 0,
                minWidth: 0,
                maxWidth: 0,
                minHeight: 0,
                maxHeight: 0,
                showRemove: !0,
                showLoader: !0,
                showErrors: !0,
                errorsPosition: "overlay",
                allowedFormats: ["portrait", "square", "landscape"],
                messages: {
                    "default": "Photo at here",
                    replace: "Replace at here",
                    remove: '<i class="fa fa-trash-o" aria-hidden="true"></i>',
                    edit: '<i class="fa fa-pencil-square-o fa-lg" aria-hidden="true">',
                    error: "Ooops, something wrong appended."
                },
                error: {
                    fileSize: "The file size is too big ({{ value }} max).",
                    minWidth: "The image width is too small ({{ value }}}px min).",
                    maxWidth: "The image width is too big ({{ value }}}px max).",
                    minHeight: "The image height is too small ({{ value }}}px min).",
                    maxHeight: "The image height is too big ({{ value }}px max).",
                    imageFormat: "The image format is not allowed ({{ value }} only)."
                },
                tpl: {
                    wrap: '<div class="dropify-wrapper"></div>',
                    loader: '<div class="dropify-loader"></div>',
                    message: '<div class="dropify-message"><span class="file-icon" /> <p>{{ default }}</p></div>',
                    preview: '<div class="dropify-preview"><span class="dropify-render"></span><div class="dropify-infos"><div class="dropify-infos-inner"><p class="dropify-infos-message">{{ replace }}</p></div></div></div>',
                    filename: '<p class="dropify-filename"><span class="file-icon"></span> <span class="dropify-filename-inner"></span></p>',
                    clearButton: '<button type="button" class="dropify-clear">{{ remove }}</button>',
                    editButton: '<button type="button" data-bs-toggle="modal" data-bs-target="#feedActionPhoto" class="dropify-clear canvas-top ">{{ edit }}</button>',
                    errorLine: '<p class="dropify-error">{{ error }}</p>',
                    errorsContainer: '<div class="dropify-errors-container"><ul></ul></div>'
                }
            };
            this.element = e,
            this.input = i(this.element),
            this.wrapper = null,
            this.preview = null,
            this.filenameWrapper = null,
            this.settings = i.extend(!0, s, t, this.input.data()),
            this.imgFileExtensions = ["png", "jpg", "jpeg"],
            this.errorsEvent = i.Event("dropify.errors"),
            this.isDisabled = !1,
            this.isInit = !1,
            this.file = {
                object: null,
                name: null,
                size: null,
                width: null,
                height: null,
                type: null
            },
            Array.isArray(this.settings.allowedFormats) || (this.settings.allowedFormats = this.settings.allowedFormats.split(" ")),
            this.onChange = this.onChange.bind(this),
            this.clearElement = this.clearElement.bind(this),
            this.onFileReady = this.onFileReady.bind(this),
            this.translateMessages(),
            this.createElements(),
            this.setContainerSize(),
            this.errorsEvent.errors = [],
            this.input.on("change", this.onChange)
        }
    }
    var t = "dropify";
    return e.prototype.onChange = function() {
        this.resetPreview(),
        this.readFile(this.element)
    }
    ,
    e.prototype.createElements = function() {
        this.isInit = !0,
        this.input.wrap(i(this.settings.tpl.wrap)),
        this.wrapper = this.input.parent();
        var e = i(this.settings.tpl.message).insertBefore(this.input);
        i(this.settings.tpl.errorLine).appendTo(e),
        this.isTouchDevice() === !0 && this.wrapper.addClass("touch-fallback"),
        this.input.attr("disabled") && (this.isDisabled = !0,
        this.wrapper.addClass("disabled")),
        this.settings.showLoader === !0 && (this.loader = i(this.settings.tpl.loader),
        this.loader.insertBefore(this.input)),
        this.preview = i(this.settings.tpl.preview),
        this.preview.insertAfter(this.input),
        this.isDisabled === !1 && this.settings.showRemove === !0 && (this.clearButton = i(this.settings.tpl.clearButton),
        this.clearButton.insertAfter(this.input),
        this.clearButton.on("click", this.clearElement)),

        this.isDisabled === !1 && this.settings.showRemove === !0 && (this.editButton = i(this.settings.tpl.editButton),
        this.editButton.insertAfter(this.clearButton)),

        this.filenameWrapper = i(this.settings.tpl.filename),
        this.filenameWrapper.prependTo(this.preview.find(".dropify-infos-inner")),
        this.settings.showErrors === !0 && (this.errorsContainer = i(this.settings.tpl.errorsContainer),
        "outside" === this.settings.errorsPosition ? this.errorsContainer.insertAfter(this.wrapper) : this.errorsContainer.insertBefore(this.input));
        var t = this.settings.defaultFile || "";
        "" != t.trim() && (this.file.name = this.cleanFilename(t),
        this.setPreview(t))
    }
    ,
    e.prototype.readFile = function(e) {
        if (e.files && e.files[0]) {
            var t = new FileReader
              , s = new Image
              , r = e.files[0]
              , n = null
              , o = this
              , h = i.Event("dropify.fileReady");
            this.clearErrors(),
            this.showLoader(),
            this.setFileInformations(r),
            t.readAsDataURL(r),
            this.errorsEvent.errors = [],
            this.checkFileSize(),
            t.onload = function(i) {
                n = i.target.result,
                this.isImage() ? (s.src = i.target.result,
                s.onload = function() {
                    o.setFileDimensions(this.width, this.height),
                    o.validateImage(),
                    o.input.trigger(h, [n])
                }
                ) : this.input.trigger(h, [n])
            }
            .bind(this),
            this.input.on("dropify.fileReady", this.onFileReady)
        }
    }
    ,
    e.prototype.onFileReady = function(i, e) {
        if (this.input.off("dropify.fileReady", this.onFileReady),
        0 === this.errorsEvent.errors.length)
            this.setPreview(e, this.file.name);
        else {
            this.input.trigger(this.errorsEvent, [this]);
            for (var t = this.errorsEvent.errors.length - 1; t >= 0; t--) {
                var s = this.errorsEvent.errors[t].namespace
                  , r = s.split(".").pop();
                this.showError(r)
            }
            if ("undefined" != typeof this.errorsContainer) {
                this.errorsContainer.addClass("visible");
                var n = this.errorsContainer;
                setTimeout(function() {
                    n.removeClass("visible")
                }, 1e3)
            }
            this.wrapper.addClass("has-error"),
            this.resetPreview(),
            this.clearElement()
        }
    }
    ,
    e.prototype.setFileInformations = function(i) {
        this.file.object = i,
        this.file.name = i.name,
        this.file.size = i.size,
        this.file.type = i.type,
        this.file.width = null,
        this.file.height = null
    }
    ,
    e.prototype.setFileDimensions = function(i, e) {
        this.file.width = i,
        this.file.height = e
    }
    ,
    e.prototype.setPreview = function(e) {
        this.wrapper.removeClass("has-error").addClass("has-preview"),
        this.filenameWrapper.children(".dropify-filename-inner").html(this.file.name);
        var t = this.preview.children(".dropify-render");
        if (this.hideLoader(),
        this.isImage() === !0) {
            var s = i('<img id="preview" />').attr("src", e);
            this.settings.height && s.css("max-height", this.settings.height),
            s.appendTo(t)
        } else
            i("<i />").attr("class", "dropify-font-file").appendTo(t),
            i('<span class="dropify-extension" />').html(this.getFileType()).appendTo(t);
        this.preview.fadeIn()
    }
    ,
    e.prototype.resetPreview = function() {
        this.wrapper.removeClass("has-preview");
        var i = this.preview.children(".dropify-render");
        i.find(".dropify-extension").remove(),
        i.find("i").remove(),
        i.find("img").remove(),
        this.preview.hide(),
        this.hideLoader()
    }
    ,
    e.prototype.cleanFilename = function(i) {
        var e = i.split("\\").pop();
        return e == i && (e = i.split("/").pop()),
        "" != i ? e : ""
    }
    ,
    e.prototype.clearElement = function() {
        if (0 === this.errorsEvent.errors.length) {
            var e = i.Event("dropify.beforeClear");
            this.input.trigger(e, [this]),
            e.result !== !1 && (this.resetFile(),
            this.input.val(""),
            this.resetPreview(),
            this.input.trigger(i.Event("dropify.afterClear"), [this]))
        } else
            this.resetFile(),
            this.input.val(""),
            this.resetPreview()
    }
    ,
    e.prototype.resetFile = function() {
        this.file.object = null,
        this.file.name = null,
        this.file.size = null,
        this.file.type = null,
        this.file.width = null,
        this.file.height = null
    }
    ,
    e.prototype.setContainerSize = function() {
        this.settings.height && this.wrapper.height(this.settings.height)
    }
    ,
    e.prototype.isTouchDevice = function() {
        return "ontouchstart"in window || navigator.MaxTouchPoints > 0 || navigator.msMaxTouchPoints > 0
    }
    ,
    e.prototype.getFileType = function() {
        return this.file.name.split(".").pop().toLowerCase()
    }
    ,
    e.prototype.isImage = function() {
        return "-1" != this.imgFileExtensions.indexOf(this.getFileType()) ? !0 : !1
    }
    ,
    e.prototype.translateMessages = function() {
        for (var i in this.settings.tpl)
            for (var e in this.settings.messages)
                this.settings.tpl[i] = this.settings.tpl[i].replace("{{ " + e + " }}", this.settings.messages[e])
    }
    ,
    e.prototype.checkFileSize = function() {
        0 !== this.maxFileSizeToByte() && this.file.size > this.maxFileSizeToByte() && this.pushError("fileSize")
    }
    ,
    e.prototype.maxFileSizeToByte = function() {
        var i = 0;
        if (0 !== this.settings.maxFileSize) {
            var e = this.settings.maxFileSize.slice(-1).toUpperCase()
              , t = 1024
              , s = 1024 * t
              , r = 1024 * s;
            "K" === e ? i = parseFloat(this.settings.maxFileSize) * t : "M" === e ? i = parseFloat(this.settings.maxFileSize) * s : "G" === e && (i = parseFloat(this.settings.maxFileSize) * r)
        }
        return i
    }
    ,
    e.prototype.validateImage = function() {
        0 !== this.settings.minWidth && this.settings.minWidth >= this.file.width && this.pushError("minWidth"),
        0 !== this.settings.maxWidth && this.settings.maxWidth <= this.file.width && this.pushError("maxWidth"),
        0 !== this.settings.minHeight && this.settings.minHeight >= this.file.height && this.pushError("minHeight"),
        0 !== this.settings.maxHeight && this.settings.maxHeight <= this.file.height && this.pushError("maxHeight"),
        "-1" == this.settings.allowedFormats.indexOf(this.getImageFormat()) && this.pushError("imageFormat")
    }
    ,
    e.prototype.getImageFormat = function() {
        return this.file.width == this.file.height ? "square" : this.file.width < this.file.height ? "portrait" : this.file.width > this.file.height ? "landscape" : void 0
    }
    ,
    e.prototype.pushError = function(e) {
        var t = i.Event("dropify.error." + e);
        this.errorsEvent.errors.push(t),
        this.input.trigger(t, [this])
    }
    ,
    e.prototype.clearErrors = function() {
        "undefined" != typeof this.errorsContainer && this.errorsContainer.children("ul").html("")
    }
    ,
    e.prototype.showError = function(i) {
        "undefined" != typeof this.errorsContainer && this.errorsContainer.children("ul").append("<li>" + this.getError(i) + "</li>")
    }
    ,
    e.prototype.getError = function(i) {
        var e = this.settings.error[i]
          , t = "";
        return "fileSize" === i ? t = this.settings.maxFileSize : "minWidth" === i ? t = this.settings.minWidth : "maxWidth" === i ? t = this.settings.maxWidth : "minHeight" === i ? t = this.settings.minHeight : "maxHeight" === i ? t = this.settings.maxHeight : "imageFormat" === i && (t = this.settings.allowedFormats.join(" ")),
        "" !== t ? e.replace("{{ value }}", t) : e
    }
    ,
    e.prototype.showLoader = function() {
        "undefined" != typeof this.loader && this.loader.show()
    }
    ,
    e.prototype.hideLoader = function() {
        "undefined" != typeof this.loader && this.loader.hide()
    }
    ,
    e.prototype.destroy = function() {
        this.input.siblings().remove(),
        this.input.unwrap(),
        this.isInit = !1
    }
    ,
    e.prototype.init = function() {
        this.createElements()
    }
    ,
    e.prototype.isDropified = function() {
        return this.isInit
    }
    ,
    i.fn[t] = function(s) {
        return this.each(function() {
            i.data(this, t) || i.data(this, t, new e(this,s))
        }),
        this
    }
    ,
    e
});
