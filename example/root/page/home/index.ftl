<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>${title}</title>
</head>
<body>
  <#include '/widget/header/header.ftl'>

  <@spring.message "common.ok" />

  <@spring.message "message.from.config"/>
  
  <#import "/paging.ftl" as paging>

  <@paging.paging total=total pageSize=pageSize currentPage=currentPage url='http://test.jd.com/xxx/'/>

  <#include '/widget/footer/footer.ftl'>

  <script data-loader="requirejs" src="http://www.cdn.com/require.js"></script>
</body>
</html>
