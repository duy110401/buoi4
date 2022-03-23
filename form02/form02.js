function KiemTra()
{
	var hvt=f.HovaTen.value;
	var dc=f.DiaChi.value;
	var email=f.Email.value;
	var dt=f.DienThoai.value;
	var emailPattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/

	if(hvt=='')
	{
		alert('Họ và tên bắt buộc nhập!')
		return false;
	}
	if(dc=='')
	{
		alert('Địa chỉ bắt buộc nhập!')
		return false;
	}if(email=='')
	{
		alert('Email bắt buộc nhập!')
		return false;
	}if(dt=='')
	{
		alert('Điện thoại bắt buộc nhập!')
		return false;
	} 
	if(!emailPattern.test(email))
	{
		alert('Địa chỉ email không hợp lệ!')
		return false;
	}
	return true;
}