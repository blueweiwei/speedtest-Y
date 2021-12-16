//LIST OF TEST SERVERS. See documentation for details if needed
var SPEEDTEST_SERVERS=[
	{	//this server doesn't actually exist, remove it
		name:"***", //user friendly name for the server
		server:"***", //URL to the server. // at the beginning will be replaced with http:// or https:// automatically
		dlURL:"backend/garbage.php",  //path to download test on this server (garbage.php or replacement)
		ulURL:"backend/empty.php",  //path to upload test on this server (empty.php or replacement)
		pingURL:"backend/empty.php",  //path to ping/jitter test on this server (empty.php or replacement)
		getIpURL:"backend/getIP.php"  //path to getIP on this server (getIP.php or replacement)
	},
	{	//this server doesn't actually exist, remove it
		name:"***", //user friendly name for the server
		server:"***", //URL to the server. // at the beginning will be replaced with http:// or https:// automatically
		dlURL:"backend/garbage.php",  //path to download test on this server (garbage.php or replacement)
		ulURL:"backend/empty.php",  //path to upload test on this server (empty.php or replacement)
		pingURL:"backend/empty.php",  //path to ping/jitter test on this server (empty.php or replacement)
		getIpURL:"backend/getIP.php"  //path to getIP on this server (getIP.php or replacement)
	}
	//add other servers here, comma separated
];