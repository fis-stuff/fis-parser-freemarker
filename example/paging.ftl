<#macro paging total pageSize currentPage url>
  <#--计算最大页码-->
  <#if total % pageSize == 0>
    <#assign maxPageIndex = total / pageSize>
  <#else>
    <#assign maxPageIndex = (total / pageSize)?floor + 1>
  </#if>

  <div class="page">
    <#--第一页，禁用“上一页”按钮-->
    <#if total == 0 || currentPage == 1>
      <span class="prev disabled">上一页</span>
    <#else>
      <#if currentPage == 2>
        <a href="${url}">上一页</a>
      <#else>
        <a href="${url}?page=${currentPage-1}">上一页</a>
      </#if>
    </#if>

    <#--第一页-->
    <#if (total > 0)>
      <a href="${url}" <#if currentPage == 1>class="current"</#if>>1</a>
    </#if>

    <#--如果不只有一页-->
    <#if (maxPageIndex > 1)>
      <#--如果当前页往前查3页不是第2页-->
      <#if ((currentPage - 3) > 2)>
        <span class="text">…</span>
      </#if>

      <#--当前页的前3页和后3页-->
      <#list (currentPage - 3)..(currentPage + 3) as index>
        <#--如果位于第一页和最后一页之间-->
        <#if (index > 1) && (index < maxPageIndex)>
        <a href="${url}?page=${index}" <#if currentPage == index>class="current"</#if>>${index}</a>
        </#if>
      </#list>

      <#--如果当前页往后查3页不是倒数第2页-->
      <#if (currentPage + 3) < (maxPageIndex - 1)>
        <span class="text">…</span>
      </#if>

      <#--最后页-->
      <a href="${url}?page=${maxPageIndex}" <#if currentPage == maxPageIndex>class="current"</#if>>${maxPageIndex}</a>
    </#if>

    <#--最后页，禁用“下一页”按钮-->
    <#if total == 0 || currentPage == maxPageIndex>
      <span class="next disabled">下一页</span>
    <#else>
      <a href="${url}?page=${currentPage+1}">下一页</a>
    </#if>
  </div>
</#macro>
