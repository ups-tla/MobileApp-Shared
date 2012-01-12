function UPSUser()
{
	this.storage = window.localStorage;
}

UPSUser.prototype.GetUserType = function()
{
	if(!this.storage.getItem("usertype"))
	{
		this.storage.setItem("usertype","none");
	}
	
	return this.storage.getItem("usertype");
}

UPSUser.prototype.SetUserType = function(type)
{
	this.storage.setItem("usertype",type);
}

UPSUser.prototype.OpenPugetsoundWebsite = function()
{
	document.location = "sitebrowser.html";
}