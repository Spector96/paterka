function generatePortfolio(category){
    let htmlContent = '';
    for (let i = 0; i < 16; i++) {
        htmlContent = htmlContent + '<div class="col-sm-6 col-md-3 col-lg-3 lakasok-hazak"><div class="portfolio-item"><div class="hover-bg"><a href="img/portfolio/lakasok_hazak/' + (i+1) + '.jpg" title="Lakások/Házak"data-lightbox-gallery="gallery1"><div class="hover-text"><h4>Lakások/Házak</h4></div><img src="img/portfolio/lakasok_hazak/' + (i+1) + '.jpg" class="img-responsive" alt="Lakások/Házak"> </a></div></div></div>'
    }
    for (let i = 0; i < 12; i++) {
        htmlContent = htmlContent + '<div class="col-sm-6 col-md-3 col-lg-3 magan-lakasok"><div class="portfolio-item"><div class="hover-bg"><a href="img/portfolio/magan_lakasok/' + (i+1) + '.jpg" title="Magánházak"data-lightbox-gallery="gallery1"><div class="hover-text"><h4>Magánházak</h4></div><img src="img/portfolio/magan_lakasok/' + (i+1) + '.jpg" class="img-responsive" alt="Magánházak"> </a></div></div></div>'
    }
    for (let i = 0; i < 2; i++) {
        htmlContent = htmlContent + '<div class="col-sm-6 col-md-3 col-lg-3 magan-lakasok"><div class="portfolio-item"><div class="hover-bg"><a href="img/portfolio/magan_lakasok/' + (i+1) + '.gif" title="Magánházak"data-lightbox-gallery="gallery1"><div class="hover-text"><h4>Magánházak</h4></div><img src="img/portfolio/magan_lakasok/' + (i+1) + '.gif" class="img-responsive" alt="Magánházak"> </a></div></div></div>'
    }
    for (let i = 0; i < 20; i++) {
        htmlContent = htmlContent + '<div class="col-sm-6 col-md-3 col-lg-3 csarnok"><div class="portfolio-item"><div class="hover-bg"><a href="img/portfolio/csarnokok/' + (i+1) + '.jpg" title="Csarnokok"data-lightbox-gallery="gallery1"><div class="hover-text"><h4>Csarnokok</h4></div><img src="img/portfolio/csarnokok/' + (i+1) + '.jpg" class="img-responsive" alt="Csarnokok"> </a></div></div></div>'
    }
    for (let i = 0; i < 24; i++) {
        htmlContent = htmlContent + '<div class="col-sm-6 col-md-3 col-lg-3 uzlet-disco"><div class="portfolio-item"><div class="hover-bg"><a href="img/portfolio/uzletek_discok/' + (i+1) + '.jpg" title="Üzletek/Diszkók"data-lightbox-gallery="gallery1"><div class="hover-text"><h4>Üzletek/Diszkók</h4></div><img src="img/portfolio/uzletek_discok/' + (i+1) + '.jpg" class="img-responsive" alt="Üzletek/Diszkók"> </a></div></div></div>'
    }
    for (let i = 0; i < 28; i++) {
        htmlContent = htmlContent + '<div class="col-sm-6 col-md-3 col-lg-3 bankfiok"><div class="portfolio-item"><div class="hover-bg"><a href="img/portfolio/bankfiokok/' + (i+1) + '.jpg" title="Bankfiókok"data-lightbox-gallery="gallery1"><div class="hover-text"><h4>Bankfiókok</h4></div><img src="img/portfolio/bankfiokok/' + (i+1) + '.jpg" class="img-responsive" alt="Bankfiók"> </a></div></div></div>'
    }
    document.getElementById('portfolio-placeholder').innerHTML = htmlContent;
}

generatePortfolio();