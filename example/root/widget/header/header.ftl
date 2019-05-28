<header>
	<div class="slogan">AppName: ${appName}</div>
  <p><@spring.message 'message.test' /></p>
	<#if login == 'true'>
	  <div class="userinfo">登录信息</div>
	<#else>
	  <div class="loginlink"><a href="">登录</a></div>
	</#if>
  <p>${header}</p>
  <#list map as key, value>
    ${key}, ${value}
  </#list>
</header>
