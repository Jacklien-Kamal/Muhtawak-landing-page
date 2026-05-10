import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useRole } from '../hooks/roleContext';
import { useI18n } from '../hooks/i18nContext';

/* ─── colour tokens ───────────────────────────────────────────────── */
const C = {
  primary: '#6b003e',
  grad:    'linear-gradient(90deg,#6b003e 0%,#9a0058 100%)',
  text:    '#666666',
};

/* ─── Article content ─────────────────────────────────────────────── */
const ARTICLE_CONTENT = {
  0: {
    en: {
      body: [
        `Creating content that brands actually want to pay for isn't about having millions of followers — it's about delivering value, authenticity, and results. Brands on Muhtawak are increasingly looking for creators who understand their audience, communicate clearly, and produce content that feels genuine rather than scripted.`,
        `The first thing brands notice is your niche. A creator who focuses on a specific topic — whether it's home cooking, budget travel, or fitness for beginners — is far more valuable than a generalist. Brands want to know exactly who they're reaching when they work with you. Your Muhtawak profile should make this crystal clear from the first glance.`,
        `Beyond niche, quality matters more than quantity. A creator with 2,000 highly engaged followers who comment, share, and respond is more attractive to a brand than someone with 50,000 passive scrollers. Engagement rate is the metric that matters most when brands are evaluating which creators to partner with.`,
      ],
      quote: `"Authenticity is the currency of the creator economy. Brands don't just want reach — they want trust."`,
      quoteAuthor: 'Muhtawak Team',
      bodyAfterQuote: `Finally, your portfolio on Muhtawak is your pitch. Make sure it showcases your best work across formats — video, photo, written — and includes examples of any past brand collaborations. Even if you're just starting out, a well-organized portfolio signals professionalism and seriousness to any brand browsing the platform.`,
      inlineImg: '/img/blog/b3.jpg',
      figureImg: '/img/blog/b3.jpg',
      tags: ['Content Creation', 'Brand Deals', 'Creator Tips'],
    },
    ar: {
      body: [
        `إنشاء محتوى تدفع عليه العلامات التجارية لا يتعلق بامتلاك ملايين المتابعين، بل يتعلق بتقديم القيمة والأصالة والنتائج. العلامات التجارية على منصة محتواك تبحث بشكل متزايد عن صنّاع محتوى يفهمون جمهورهم، ويتواصلون بوضوح، وينتجون محتوى يبدو حقيقياً لا مكتوباً.`,
        `أول ما تلاحظه العلامات التجارية هو تخصصك. صانع المحتوى الذي يركز على موضوع محدد — سواء كان الطبخ المنزلي أو السفر بميزانية محدودة أو اللياقة للمبتدئين — يكون أكثر قيمة بكثير من الشخص العام.`,
        `بعد التخصص، الجودة أهم من الكمية. صانع محتوى لديه 2000 متابع متفاعل يعلّقون ويشاركون ويردون، أكثر جاذبية للعلامة التجارية من شخص لديه 50,000 متابع سلبي.`,
      ],
      quote: `"الأصالة هي عملة اقتصاد المحتوى. العلامات التجارية لا تريد الوصول فقط — بل تريد الثقة."`,
      quoteAuthor: 'فريق محتواك',
      bodyAfterQuote: `أخيراً، محفظتك على محتواك هي عرضك التقديمي. تأكد من أنها تعرض أفضل أعمالك عبر أشكال مختلفة — فيديو وصورة ونص — وتتضمن أمثلة على أي تعاون سابق مع علامات تجارية.`,
      inlineImg: '/img/blog/b3.jpg',
      figureImg: '/img/blog/b3.jpg',
      tags: ['إنشاء المحتوى', 'صفقات العلامات التجارية', 'نصائح للصانعين'],
    },
  },
  1: {
    en: {
      body: [
        `Growing your earnings on Muhtawak isn't just about taking every project that comes your way — it's about being strategic. The creators who earn the most consistently are the ones who understand how to position themselves, which projects to prioritize, and how to turn one-time collaborations into ongoing relationships.`,
        `Start by completing your profile fully. Creators with complete profiles — including a clear bio, niche tags, and at least three portfolio pieces — receive up to 3x more brand inquiries than those with incomplete profiles.`,
        `Next, be selective about the projects you apply for. Focus on brands that align with your content style and values. A great collaboration in your niche is worth far more than three rushed projects outside it.`,
      ],
      quote: `"Your rate grows when your results speak louder than your follower count."`,
      quoteAuthor: 'Muhtawak Team',
      bodyAfterQuote: `Finally, communicate professionally and deliver on time — every single time. Brands on Muhtawak leave ratings after each collaboration, and a strong track record of reliability is the most powerful asset a creator can build.`,
      inlineImg: '/img/blog/b4.jpg',
      figureImg: '/img/blog/b4.jpg',
      tags: ['Earnings', 'Creator Growth', 'Brand Partnerships'],
    },
    ar: {
      body: [
        `زيادة أرباحك على محتواك لا تعني قبول كل مشروع يأتيك — بل تعني أن تكون استراتيجياً. الصانعون الذين يحققون أعلى دخل باستمرار هم من يعرفون كيف يضعون أنفسهم في الموضع الصحيح.`,
        `ابدأ باستكمال ملفك الشخصي بالكامل. الصانعون الذين لديهم ملفات مكتملة يتلقون ما يصل إلى 3 أضعاف استفسارات العلامات التجارية مقارنة بمن لديهم ملفات ناقصة.`,
        `بعد ذلك، كن انتقائياً في المشاريع التي تتقدم لها. ركّز على العلامات التجارية التي تتوافق مع أسلوب محتواك وقيمك.`,
      ],
      quote: `"سعرك يرتفع حين تتكلم نتائجك بصوت أعلى من عدد متابعيك."`,
      quoteAuthor: 'فريق محتواك',
      bodyAfterQuote: `أخيراً، تواصل باحترافية وسلّم في الوقت المحدد — في كل مرة. العلامات التجارية على محتواك تترك تقييمات بعد كل تعاون، وسجل موثوقية قوي هو أقوى أصل يمكن لصانع المحتوى بناؤه.`,
      inlineImg: '/img/blog/b4.jpg',
      figureImg: '/img/blog/b4.jpg',
      tags: ['الأرباح', 'نمو الصانع', 'شراكات العلامات التجارية'],
    },
  },
  2: {
    en: {
      body: [
        `The advertising landscape has shifted dramatically. Where brands once spent the majority of their budgets on polished studio productions and celebrity endorsements, an increasing number are now redirecting those same budgets toward user-generated content — and the results are undeniable.`,
        `Studies consistently show that consumers trust content created by real people far more than content produced by brands themselves. UGC feels unfiltered, relatable, and honest.`,
        `For brands operating on Muhtawak, the shift to UGC isn't just a trend — it's a fundamental change in how they approach their content strategy.`,
      ],
      quote: `"UGC converts at 4x the rate of brand-produced content — because people trust people."`,
      quoteAuthor: 'Muhtawak Team',
      bodyAfterQuote: `The brands seeing the strongest results on Muhtawak are the ones who give creators clear briefs but genuine creative freedom. The magic of UGC is in the authentic voice of the creator — and smart brands know to let that voice come through.`,
      inlineImg: '/img/blog/b5.jpg',
      figureImg: '/img/blog/b5.jpg',
      tags: ['UGC', 'Brand Marketing', 'Digital Ads'],
    },
    ar: {
      body: [
        `تغيّر مشهد الإعلان بشكل جذري. حيث كانت العلامات التجارية تنفق معظم ميزانياتها على الإنتاجات الاستوديوية المصقولة وتأييدات المشاهير، بات عدد متزايد منها يعيد توجيه تلك الميزانيات نحو المحتوى الذي ينشئه المستخدمون.`,
        `تُظهر الدراسات باستمرار أن المستهلكين يثقون في المحتوى الذي ينشئه أشخاص حقيقيون بكثير أكثر من المحتوى الذي تنتجه العلامات التجارية نفسها.`,
        `بالنسبة للعلامات التجارية العاملة على محتواك، فإن التحول نحو UGC ليس مجرد اتجاه — بل هو تغيير جوهري في كيفية تعاملها مع استراتيجية المحتوى.`,
      ],
      quote: `"يحقق UGC معدل تحويل أعلى 4 مرات من المحتوى الذي تنتجه العلامات التجارية — لأن الناس يثقون بالناس."`,
      quoteAuthor: 'فريق محتواك',
      bodyAfterQuote: `العلامات التجارية التي تحقق أقوى نتائج على محتواك هي تلك التي تعطي الصانعين توجيهات واضحة لكن مع حرية إبداعية حقيقية.`,
      inlineImg: '/img/blog/b5.jpg',
      figureImg: '/img/blog/b5.jpg',
      tags: ['المحتوى المستخدم', 'تسويق العلامات التجارية', 'الإعلانات الرقمية'],
    },
  },
};

/* ─── Dynamic OG meta tags injector ──────────────────────────────────
   Injects/updates <meta> og: and twitter: tags in <head> so that
   Facebook, Twitter, WhatsApp etc. scrape the right title,
   description, and image when the share URL is crawled.
────────────────────────────────────────────────────────────────────── */
function setMeta(property, content) {
  // try og: style (property attr)
  let el = document.querySelector(`meta[property="${property}"]`);
  if (!el) {
    // try name attr (twitter:)
    el = document.querySelector(`meta[name="${property}"]`);
  }
  if (!el) {
    el = document.createElement('meta');
    // twitter cards use name=, OG uses property=
    if (property.startsWith('twitter:')) {
      el.setAttribute('name', property);
    } else {
      el.setAttribute('property', property);
    }
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
}

function usePostMeta(post, article) {
  useEffect(() => {
    if (!post) return;

    const pageUrl    = window.location.href;
    const imageUrl   = article?.inlineImg
      ? `${window.location.origin}${article.inlineImg}`
      : '';
    const description = post.excerpt || '';

    // Page title
    document.title = `${post.title} | Muhtawak`;

    // Open Graph
    setMeta('og:type',        'article');
    setMeta('og:url',         pageUrl);
    setMeta('og:title',       post.title);
    setMeta('og:description', description);
    setMeta('og:image',       imageUrl);
    setMeta('og:site_name',   'Muhtawak');

    // Twitter Card
    setMeta('twitter:card',        'summary_large_image');
    setMeta('twitter:url',         pageUrl);
    setMeta('twitter:title',       post.title);
    setMeta('twitter:description', description);
    setMeta('twitter:image',       imageUrl);

    // Cleanup: restore on unmount
    return () => { document.title = 'Muhtawak'; };
  }, [post, article]);
}

/* ─── Share helpers ───────────────────────────────────────────────── */
const SHARE_BUTTONS = [
  {
    label: 'X (Twitter)',
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.253 5.622 5.912-5.622Zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
    getHref: (url, title) =>
      `https://twitter.com/intent/tweet?url=${url}&text=${title}`,
  },
  {
    label: 'Facebook',
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
      </svg>
    ),
    // Facebook reads OG tags server-side; passing the URL is enough
    getHref: (url) =>
      `https://www.facebook.com/sharer/sharer.php?u=${url}`,
  },
 
  {
    label: 'WhatsApp',
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
      </svg>
    ),
    getHref: (url, title) => `https://wa.me/?text=${title}%20${url}`,
  },
];

/* ─── UI helpers ──────────────────────────────────────────────────── */
const TagLink = ({ children }) => (
  <a href="#" style={{
    display: 'inline-block', border: '2px solid #e5e5e5', padding: '8px 14px',
    borderRadius: 4, fontSize: 13, fontWeight: 500, color: C.text,
    textDecoration: 'none', marginRight: 8, marginBottom: 8, transition: 'all .2s',
  }}
    onMouseEnter={e => { e.currentTarget.style.background = C.grad; e.currentTarget.style.color = '#fff'; e.currentTarget.style.borderColor = 'transparent'; }}
    onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = C.text; e.currentTarget.style.borderColor = '#e5e5e5'; }}
  >{children}</a>
);

const ShareBtn = ({ icon, label, getHref, postTitle }) => {
  const handleClick = (e) => {
    e.preventDefault();
    const url   = encodeURIComponent(window.location.href);
    const title = encodeURIComponent(postTitle || '');
    window.open(getHref(url, title), '_blank', 'noopener,noreferrer,width=640,height=500');
  };
  return (
    <a href="#" title={label} onClick={handleClick} style={{
      display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
      width: 38, height: 38, borderRadius: '50%', border: '1px solid #eee',
      color: C.text, fontSize: 15, marginLeft: 8, textDecoration: 'none',
      transition: 'all .2s', cursor: 'pointer',
    }}
      onMouseEnter={e => { e.currentTarget.style.background = C.grad; e.currentTarget.style.color = '#fff'; e.currentTarget.style.borderColor = 'transparent'; }}
      onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = C.text; e.currentTarget.style.borderColor = '#eee'; }}
    >{icon}</a>
  );
};

function FallbackImg({ src, alt, height, style = {} }) {
  const [err, setErr] = React.useState(false);
  if (err) return <div style={{ height, background: 'linear-gradient(135deg,#fdf5f9,#e8d5f0)', ...style }} />;
  return <img src={src} alt={alt} style={style} onError={() => setErr(true)} />;
}

/* ─── Main ────────────────────────────────────────────────────────── */
export default function BlogDetails() {
  const { id }      = useParams();
  const { content } = useRole();
  const { isRTL }   = useI18n();

  useEffect(() => { window.scrollTo(0, 0); }, [id]);

  const posts     = content?.blogs?.posts || [];
  const postIndex = Number(id);
  const post      = posts[postIndex];
  const prevPost  = posts[postIndex - 1];
  const nextPost  = posts[postIndex + 1];

  const articleLang = isRTL ? 'ar' : 'en';
  const article     = ARTICLE_CONTENT[postIndex]?.[articleLang] || ARTICLE_CONTENT[0][articleLang];

  // ← inject OG / Twitter meta tags dynamically
  usePostMeta(post, article);

  if (!post) {
    return (
      <div style={{ padding: '120px 20px', textAlign: 'center', fontFamily: "'Poppins', sans-serif" }}>
        <h2 style={{ color: C.primary, marginBottom: 16 }}>{isRTL ? 'المقال غير موجود' : 'Post not found'}</h2>
        <Link to="/" style={{ color: C.primary, fontWeight: 600 }}>← {isRTL ? 'العودة للرئيسية' : 'Back to Home'}</Link>
      </div>
    );
  }

  return (
    <div style={{ fontFamily: "'Poppins', sans-serif", color: C.text, background: '#fff' }} dir={isRTL ? 'rtl' : 'ltr'}>

      {/* ── Breadcrumb hero ─────────────────────────────────── */}
      <section style={{
        minHeight: 320,
        background: `linear-gradient(rgba(107,0,62,.78),rgba(40,0,24,.88)),
                     url('img/testimonial/test-bg.jpg') center/cover no-repeat`,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        textAlign: 'center', padding: '40px 24px',
      }}>
        <div style={{ maxWidth: 720 }}>
          <h1 style={{ color: '#fff', fontSize: 34, fontWeight: 700, margin: '0 0 18px', lineHeight: 1.35 }}>
            {post.title}
          </h1>
          <nav style={{ display: 'flex', gap: 10, justifyContent: 'center', fontSize: 14, flexWrap: 'wrap', alignItems: 'center' }}>
            <Link to="/" style={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'none' }}>{isRTL ? 'الرئيسية' : 'Home'}</Link>
            <span style={{ color: 'rgba(255,255,255,0.4)' }}>›</span>
            <Link to="/#blog" style={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'none' }}>{isRTL ? 'المدونة' : 'Blog'}</Link>
            <span style={{ color: 'rgba(255,255,255,0.4)' }}>›</span>
            <span style={{ color: '#ffb3d9', fontWeight: 600 }}>{isRTL ? 'تفاصيل المقال' : 'Post Details'}</span>
          </nav>
        </div>
      </section>

      {/* ── Main content ────────────────────────────────────── */}
      <section style={{ padding: '70px 0' }}>
        <div style={{ maxWidth: 1180, margin: '0 auto', padding: '0 20px' }}>
          <div style={{ display: 'flex', gap: 40, flexWrap: 'wrap', alignItems: 'flex-start' }}>
            <div style={{ flex: '1 1 620px', minWidth: 0 }}>

              {/* Hero image */}
              <FallbackImg src={article.inlineImg} alt={post.title} height={440} style={{
                width: '100%', objectFit: 'cover', borderRadius: 14,
                boxShadow: '0 10px 50px rgba(107,0,62,0.18)', marginBottom: 32, display: 'block',
              }} />

              {/* Meta row */}
              <div style={{
                display: 'flex', flexWrap: 'wrap', gap: 16, marginBottom: 24,
                paddingBottom: 20, borderBottom: '1px solid #f0e0ea', fontSize: 13, alignItems: 'center',
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                   <div className='bg-gradient-to-r from-primary via-secondary to-third /90 w-10 mx-auto flex justify-center items-center h-10 rounded-full'>
                  <img
                    src={'/img/logo/logo-white.png'}
                    alt={post.author}
                    style={{ width: '60%', height: '60%', objectFit: 'contain' }}
                    onError={e => e.target.style.opacity = 0}
                  />
                </div>
                  <div>
                    <div style={{ fontWeight: 700, color: C.primary, fontSize: 14 }}>{post.author}</div>
                    <div style={{ color: '#aaa', fontSize: 12 }}>{post.date}</div>
                  </div>
                </div>
         
              </div>

              {/* Excerpt lead */}
              <p style={{
                fontSize: 16, color: '#444', lineHeight: 1.85, marginBottom: 28,
                borderLeft: isRTL ? 'none' : '4px solid #6b003e',
                borderRight: isRTL ? '4px solid #6b003e' : 'none',
                paddingLeft: isRTL ? 0 : 20, paddingRight: isRTL ? 20 : 0, fontStyle: 'italic',
              }}>{post.excerpt}</p>

              {/* Body */}
              {article.body.map((para, i) => (
                <p key={i} style={{ fontSize: 15, lineHeight: 1.9, color: '#555', marginBottom: 22 }}>{para}</p>
              ))}

              {/* Inline image */}
              <FallbackImg src={article.inlineImg} alt="" height={280} style={{
                width: '100%', objectFit: 'cover', borderRadius: 12,
                boxShadow: '0 6px 30px rgba(107,0,62,0.12)', margin: '30px 0', display: 'block',
              }} />

              {/* Blockquote */}
              <blockquote style={{
                background: C.grad, padding: '30px 44px 30px 76px', borderRadius: 14,
                color: '#fff', lineHeight: 1.8, margin: '32px 0', position: 'relative', fontSize: 15,
              }}>
                <span style={{ position: 'absolute', [isRTL ? 'right' : 'left']: 22, top: 20, fontSize: 56, opacity: .15, lineHeight: 1, fontFamily: 'Georgia, serif' }}>❝</span>
                {article.quote}
                <footer style={{ marginTop: 14, fontWeight: 700, fontSize: 13, opacity: 0.82 }}>— {article.quoteAuthor}</footer>
              </blockquote>

              <p style={{ fontSize: 15, lineHeight: 1.9, color: '#555', marginBottom: 28 }}>{article.bodyAfterQuote}</p>

              {/* Figure float */}
              <div style={{ overflow: 'hidden', marginBottom: 38 }}>
                <FallbackImg src={article.figureImg} alt="" height={190} style={{
                  float: isRTL ? 'right' : 'left', width: 250, objectFit: 'cover', borderRadius: 10,
                  [isRTL ? 'marginLeft' : 'marginRight']: 26, marginBottom: 12, boxShadow: '0 4px 20px rgba(107,0,62,0.1)',
                }} />
                <p style={{ fontSize: 15, lineHeight: 1.9, color: '#555' }}>
                  {isRTL
                    ? 'منصة محتواك مصممة لتمكين كل صانع محتوى من الوصول إلى الفرص المناسبة بصرف النظر عن حجم متابعيه.'
                    : 'Muhtawak is built to empower every creator to access the right opportunities regardless of follower count.'}
                </p>
              </div>
                    

              {/* Prev / Next */}
              {(prevPost || nextPost) && (
                <div style={{ display: 'flex', borderTop: '1px solid #f0e0ea', borderBottom: '1px solid #f0e0ea', marginBottom: 52 }}>
                  {prevPost ? (
                    <Link to={`/blog/${postIndex - 1}`} style={{
                      flex: 1, textDecoration: 'none', padding: '22px 20px',
                      borderRight: isRTL ? 'none' : (nextPost ? '1px solid #f0e0ea' : 'none'),
                      borderLeft: isRTL ? (nextPost ? '1px solid #f0e0ea' : 'none') : 'none', transition: 'background .2s',
                    }}
                      onMouseEnter={e => e.currentTarget.style.background = '#fdf5f9'}
                      onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
                    >
                      <span style={{ fontSize: 11, textTransform: 'uppercase', letterSpacing: 2, color: '#bbb', display: 'block', marginBottom: 7 }}>{isRTL ? '← السابق' : '← Prev'}</span>
                      <span style={{ fontSize: 14, fontWeight: 700, color: C.primary, lineHeight: 1.4, display: 'block' }}>{prevPost.title}</span>
                    </Link>
                  ) : <div style={{ flex: 1 }} />}
                  {nextPost && (
                    <Link to={`/blog/${postIndex + 1}`} style={{
                      flex: 1, textDecoration: 'none', padding: '22px 20px',
                      textAlign: isRTL ? 'left' : 'right', transition: 'background .2s',
                    }}
                      onMouseEnter={e => e.currentTarget.style.background = '#fdf5f9'}
                      onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
                    >
                      <span style={{ fontSize: 11, textTransform: 'uppercase', letterSpacing: 2, color: '#bbb', display: 'block', marginBottom: 7 }}>{isRTL ? 'التالي →' : 'Next →'}</span>
                      <span style={{ fontSize: 14, fontWeight: 700, color: C.primary, lineHeight: 1.4, display: 'block' }}>{nextPost.title}</span>
                    </Link>
                  )}
                </div>
              )}

              {/* Author box */}
              <div style={{
                background: 'linear-gradient(135deg,#fdf5f9 0%,#f5e6f0 100%)', borderRadius: 16,
                padding: '44px 28px 32px', textAlign: 'center', marginBottom: 50,
                border: '1px solid #f0d8e8', position: 'relative',
              }}>
                <div className='bg-gradient-to-r from-primary via-secondary to-third w-16 mx-auto flex justify-center items-center h-16 rounded-full'>
                  <img
                    src={'/img/logo/logo-white.png'}
                    alt={post.author}
                    style={{ width: '60%', height: '60%', objectFit: 'contain' }}
                    onError={e => e.target.style.opacity = 0}
                  />
                </div>
                <h5 style={{ fontSize: 20, fontWeight: 700, color: C.primary, marginBottom: 4 }}>{post.author}</h5>
                <div style={{ marginBottom: 16 }}>
                  {SHARE_BUTTONS.map(btn => (
                    <ShareBtn key={btn.label} icon={btn.icon} label={btn.label} getHref={btn.getHref} postTitle={post.title} />
                  ))}
                </div>
             
              </div>

            </div>
          </div>
        </div>
      </section>
    </div>
  );
}