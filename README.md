# demo push notification web application for Firefox
This is very simple demo to demonstrate the Push APIand show basic service worker feature in action.

## Running the demo
1. Clone this repo locally (you'll need to [install git](http://git-scm.com/downloads)):

        https://github.com/trungtt224/web_notification.git

2. Run the app:

        cd web_notification/ 
        python -m SimpleHTTPServer

4. Open the app (Using firefox) at
   [127.0.0.1:8000](127.0.0.1:8000)
   (Note: You will need to add a security exception) 
5. Push notification using commannd: 

	After allow to receive notifications, using enpoint to push notification via command line 
	
	Copy enpoint from alert in browser
	
        curl -X POST [enpoint]

    For example
    
        curl -X POST https://updates.push.services.mozilla.com/wpush/v1/gAAAAABX6isuVcm19HCJHpBET7ZhSNbMaYR6kasTQwb4Ub6T81LpFE4MX6zlhGyHwMgPUHkmPO5yXbUbcjrxIuAkHVYW1iN5HvbDcZByupyDBGz5Mqlli0Xw-ZfiqsMc8-VAoYAIirc0
	  	 