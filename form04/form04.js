function KiemTra()
{
	var ht=f.HovaTen.value;
	var ngay=f.Ngay.value;
	var thang=f.Thang.value;
	var nam=f.Nam.value;
	var nn=f.NgheNghiep.value;
	var gc=f.GhiChu.value;
	if(ht=='')
	{
		alert('Bắt buộc nhập họ tên!')
		return false;
	}
	if(ngay=='')
	{
		alert('Bắt buộc chọn ngày!')
		return false;
	}
	if(thang=='')
	{
		alert('Bắt buộc chọn tháng!')
		return false;
	}
	if(nam=='')
	{
		alert('Bắt buộc chọn năm!')
		return false;
	}
	if(nn=='')
	{
		alert('Bắt buộc chọn nghề nghiệp!')
		return false;
	}
	if(gc=='')
	{
		alert('Bắt buộc nhập ghi chú!')
		return false;
	}
	return true;
	
}