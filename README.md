# GetSeasonIdAPI

Create a puppeteer graphQl Api that get 3, 7 and 8 

#The query
query SeasonQuery($seasonIdId: Int) {
  seasonId(id: $seasonIdId)
}

#variable
{
  "seasonIdId": 8
}
