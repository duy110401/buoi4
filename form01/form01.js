function KiemTra()
{
	var tdn = f.TenDangNhap.value;
	var mk = f.MatKhau.value;
	if(tdn == '')
	{
		alert('Tên đăng nhập không thể bỏ trống!');
		return false;
	}
	if(mk == '')
	{
		alert('Mật khẩu không thể bỏ trống!');
		return false;
	}
	return true;
}