<html>
<head>
    <title>Image Upload and Resize</title>
</head>
<body>
    <h2>Upload Image</h2>
    <form action="upload" method="post" enctype="multipart/form-data">
        <input type="file" name="file" accept="image/*" required>
        <input type="submit" value="Upload">
    </form>
</body>
</html>