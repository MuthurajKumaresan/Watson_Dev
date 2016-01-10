'use strict';

var watson = require('watson-developer-cloud');
var fs = require('fs');


var personality_insights = watson.personality_insights({
  username:'22db58af-83d2-4280-b708-5babb951fef4',
  password:'y2lGckS8p6Yl',
  version:'v2'
});

fs.readFile('../resources/words.txt','utf8',function(err,data)
{
  if (err) throw err;
  personality_insights.profile({ text: data },
    function (err, response) {
      if (err)
      console.log('error',err);
      else
      {
      var output = JSON.stringify(response,null,2);
      console.log(output);
      fs.writeFile('../output/personality_insights_output.txt',output);
      }
  });
});
