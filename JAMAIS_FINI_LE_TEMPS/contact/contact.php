<!DOCTYPE html>
<html>
<head>
	<title></title>
</head>
<body>
	<form action="contact.php" method="post">
		<dl>
			<dt>
				お問い合わせ項目
			</dt>
			<dd>
				<label><input type="checkbox[]" name="container" value=""></label>
			</dd>
			<dt>
				お問い合わせ内容・ご質問内容
			</dt>
			<dd>
				<textarea name="coment" rows="10" cols="30" ></textarea>
			</dd>
			<p class="submmit"><input type="submit" name="submit" value="送信"></p>
		</dl>
	</form>

</body>
</html>