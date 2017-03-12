import { ACTION_TYPE } from '../constants/editor';

export const changeDecorateType = (decorateType) => {
    return (
        {
            type: ACTION_TYPE.CHANGE_DECORATE_TYPE,
            decorateType
        }
    )
};

export const changeHTML = (beforeHtml) => {
    const html = filterHtml(beforeHtml);
    return (
        {
            type: ACTION_TYPE.CHANGE_HTML,
            html,
        }
    )
};


// TODO dummy
function filterHtml(beforeHTML) {
    if (!beforeHTML) {
        return "";
    }

    let afterHTML = beforeHTML;

    const twitterUrl = /twitter\.com.+\/status/;
    const twitterEmbedUrl = '<blockquote class="twitter-tweet" data-lang="ja"><p lang="ja" dir="ltr">ゲームが上手かったら内定出します。一芸ならぬ <a href="https://twitter.com/hashtag/%E3%81%84%E3%81%A1%E3%82%B2%E3%83%BC%E6%8E%A1%E7%94%A8?src=hash">#いちゲー採用</a> を開始しました。「ゲームばかりに時間を費やしてしまった…」というあなた、大歓迎です。ご応募お待ちしています！ <a href="https://twitter.com/hashtag/%E5%B0%B1%E6%B4%BB%E8%A7%A3%E7%A6%81?src=hash">#就活解禁</a> <a href="https://twitter.com/hashtag/%E6%96%B0%E5%8D%92%E6%8E%A1%E7%94%A8%E3%81%AF%E3%81%98%E3%82%81%E3%81%BE%E3%81%97%E3%81%9F?src=hash">#新卒採用はじめました</a> <a href="https://t.co/FNnB5CcAYF">https://t.co/FNnB5CcAYF</a></p>&mdash; 面白法人カヤック (@kayac_inc) <a href="https://twitter.com/kayac_inc/status/836605215461654529">2017年2月28日</a></blockquote><script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>';
    if (beforeHTML.match(twitterUrl)) {
        afterHTML = afterHTML.replace(twitterUrl, twitterEmbedUrl);
    }

    const youtubeUrl = "youtube.com/watch";
    const youtubeEmbedUrl = '<iframe width="560" height="315" src="https://www.youtube.com/embed/H5RcVDcGPYE" frameborder="0" allowfullscreen></iframe>';
    if (beforeHTML.match(youtubeUrl)) {
        afterHTML = afterHTML.replace(youtubeUrl, youtubeEmbedUrl);
    }

    return afterHTML;
};
