import React from 'react';

const SideBar = () => {
    return (
        <div className="sidebar">

            <div className="widget widget_block widget_search">
                <form method="get" className="wp-block-search">
                    <div className="wp-block-search__inside-wrapper ">
                        <input type="search" className="wp-block-search__input" name="search" value="" placeholder="Search" required="" />
                        <button type="submit" className="wp-block-search__button"><i className="bi bi-search"></i></button>
                    </div>
                </form>
            </div>
            {/* <!-- end widget --> */}

            <div className="widget widget_block">
                <div className="wp-block-group__inner-container">
                    <h2 className="widget-title">Recent Posts <span className="title-line"></span></h2>
                    <ul className="wp-block-latest-posts__list wp-block-latest-posts">
                        <li><a href="/blog-details">California Mansion Residence</a></li>
                        <li><a href="/blog-details">Well decor house in Sydney</a></li>
                        <li><a href="/blog-details">Huge large area Bedroom</a></li>
                        <li><a href="/blog-details">Recent trends in designing space</a></li>
                    </ul>
                </div>
            </div>
            {/* <!-- end widget --> */}

            <div className="widget widget_block">
                <div className="wp-block-group__inner-container">
                    <h2 className="widget-title">Recent Comments <span className="title-line"></span></h2>
                    <ol className="wp-block-latest-comments">
                        <li><a>Patric Doe</a> on <a>California Mansion Residence</a></li>
                        <li><a>Jonathon Hall</a> on <a>NewYork Seven Star Hotel</a></li>
                        <li><a>Jonathon Hall</a> on <a>California Mansion Residence</a></li>
                    </ol>
                </div>
            </div>
            {/* <!-- end widget --> */}

            <div className="widget widget_block">
                <div className="wp-block-group__inner-container">
                    <h2 className="widget-title">Archives <span className="title-line"></span></h2>
                    <ul className=" wp-block-archives-list wp-block-archives">
                        <li><a>November 2021</a></li>
                        <li><a>December 2020</a></li>
                        <li><a>January 2019</a></li>
                        <li><a>March 2018</a></li>
                    </ul>
                </div>
            </div>
            {/* <!-- end widget --> */}

            <div className="widget widget_block">
                <div className="wp-block-group__inner-container">
                    <h2 className="widget-title">Categories <span className="title-line"></span></h2>
                    <ul className="wp-block-categories-list wp-block-categories">
                        <li className="cat-item"><a>Architecture</a></li>
                        <li className="cat-item"><a>Residence</a></li>
                        <li className="cat-item"><a>Architect</a></li>
                        <li className="cat-item"><a>Interior</a></li>
                    </ul>
                </div>
            </div>
            {/* <!-- end widget --> */}

            <div className="widget widget_block widget_tag_cloud">
                <div className="wp-block-group__inner-container">
                    <h2 className="widget-title">Tags <span className="title-line"></span></h2>
                    <ul className="wp-block-categories-list wp-block-categories">
                        <p className="wp-block-tag-cloud">
                            <a className="tag-cloud-link">Interior</a>
                            <a className="tag-cloud-link">Design</a>
                            <a className="tag-cloud-link">Exterior</a>
                            <a className="tag-cloud-link">Architecture</a>
                            <a className="tag-cloud-link">Landscape</a>
                            <a className="tag-cloud-link">Gallery</a>
                        </p>
                    </ul>
                </div>
            </div>
            {/* <!-- end widget --> */}
        </div>
    );
};

export default SideBar;