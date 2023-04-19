    // <script type="text/javascript" language="javascript">
    
    $(".tabsTitle > .tabButton").click(function (e) {
        e.preventDefault();

        let closestTabTitle =  $(this).closest('.tabsTitle');
        closestTabTitle.find(".tabButton").removeClass('active');
        $(this).addClass("active");
        
        let index = closestTabTitle.find(".tabButton").index(this);

        closestTabTitle.parents(".myTabs").find(".tabsContent").find(".tabContent").removeClass("active").hide('');
        closestTabTitle.parents(".myTabs").find(".tabsContent").find(".tabContent").eq(index).addClass("active").show('');
    });


// </script>