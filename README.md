# ecpoker-google-sheet
Set up google sheet for ECPoker app

- Create a new google sheet that includes Players, Records and Dashboard sheets
- Players sheet list all players by name
- Dashboard:
  - Cell A1 use data validation,  Criteria: Dropdown (from a range), =Records!$B1:$B
  - Cell A3, formula: =FILTER(Records!A:K, (Records!B:B = Dashboard!A1), DATEVALUE(Records!A:A) = TODAY())
- Extensions >> App Script, paste the code Code.gs
- Share the googlesheet with everyone has the link, role: Editor (to use dashboard) or viewer 


# deployment

Deploy > New Deployment >> Web App
* Execute as (Me ...)
* Who has access: Anyone

Once deployed, copy the deployment id to the app
