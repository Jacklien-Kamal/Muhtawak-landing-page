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

/* ─── Real article content keyed by post index ──────────────────────
   Keys 0, 1, 2 match posts[0..2] in roleContext.
   Each key has 'en' and 'ar' versions.
────────────────────────────────────────────────────────────────────── */
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
        `أول ما تلاحظه العلامات التجارية هو تخصصك. صانع المحتوى الذي يركز على موضوع محدد — سواء كان الطبخ المنزلي أو السفر بميزانية محدودة أو اللياقة للمبتدئين — يكون أكثر قيمة بكثير من الشخص العام. تريد العلامات التجارية أن تعرف بالضبط من ستصل إليه حين تتعاون معك.`,
        `بعد التخصص، الجودة أهم من الكمية. صانع محتوى لديه 2000 متابع متفاعل يعلّقون ويشاركون ويردون، أكثر جاذبية للعلامة التجارية من شخص لديه 50,000 متابع سلبي. معدل التفاعل هو المقياس الأهم حين تقيّم العلامات التجارية الشركاء المحتملين.`,
      ],
      quote: `"الأصالة هي عملة اقتصاد المحتوى. العلامات التجارية لا تريد الوصول فقط — بل تريد الثقة."`,
      quoteAuthor: 'فريق محتواك',
      bodyAfterQuote: `أخيراً، محفظتك على محتواك هي عرضك التقديمي. تأكد من أنها تعرض أفضل أعمالك عبر أشكال مختلفة — فيديو وصورة ونص — وتتضمن أمثلة على أي تعاون سابق مع علامات تجارية. حتى لو كنت في بداياتك، فإن محفظة منظمة جيداً توصل رسالة الاحترافية والجدية لأي علامة تجارية تتصفح المنصة.`,
      inlineImg: '/img/blog/b3.jpg',
      figureImg: '/img/blog/b3.jpg',
      tags: ['إنشاء المحتوى', 'صفقات العلامات التجارية', 'نصائح للصانعين'],
    },
  },
  1: {
    en: {
      body: [
        `Growing your earnings on Muhtawak isn't just about taking every project that comes your way — it's about being strategic. The creators who earn the most consistently are the ones who understand how to position themselves, which projects to prioritize, and how to turn one-time collaborations into ongoing relationships.`,
        `Start by completing your profile fully. Creators with complete profiles — including a clear bio, niche tags, and at least three portfolio pieces — receive up to 3x more brand inquiries than those with incomplete profiles. This is the single easiest thing you can do to increase your visibility on the platform immediately.`,
        `Next, be selective about the projects you apply for. Focus on brands that align with your content style and values. A great collaboration in your niche is worth far more than three rushed projects outside it. Quality work in the right category builds your reputation faster and leads to repeat commissions.`,
      ],
      quote: `"Your rate grows when your results speak louder than your follower count."`,
      quoteAuthor: 'Muhtawak Team',
      bodyAfterQuote: `Finally, communicate professionally and deliver on time — every single time. Brands on Muhtawak leave ratings after each collaboration, and a strong track record of reliability is the most powerful asset a creator can build. Creators with top ratings are featured first in brand searches and receive exclusive high-budget opportunities before anyone else.`,
      inlineImg: '/img/blog/b4.jpg',
      figureImg: '/img/blog/b4.jpg',
      tags: ['Earnings', 'Creator Growth', 'Brand Partnerships'],
    },
    ar: {
      body: [
        `زيادة أرباحك على محتواك لا تعني قبول كل مشروع يأتيك — بل تعني أن تكون استراتيجياً. الصانعون الذين يحققون أعلى دخل باستمرار هم من يعرفون كيف يضعون أنفسهم في الموضع الصحيح، وأي المشاريع يفضّلون، وكيف يحوّلون التعاون لمرة واحدة إلى علاقة مستمرة.`,
        `ابدأ باستكمال ملفك الشخصي بالكامل. الصانعون الذين لديهم ملفات مكتملة — تشمل نبذة واضحة وعلامات التخصص وثلاث قطع محفظة على الأقل — يتلقون ما يصل إلى 3 أضعاف استفسارات العلامات التجارية مقارنة بمن لديهم ملفات ناقصة. هذا أبسط شيء يمكنك فعله لزيادة ظهورك على المنصة فوراً.`,
        `بعد ذلك، كن انتقائياً في المشاريع التي تتقدم لها. ركّز على العلامات التجارية التي تتوافق مع أسلوب محتواك وقيمك. تعاون رائع في تخصصك يساوي أكثر بكثير من ثلاثة مشاريع متسرعة خارجه. العمل الجيد في الفئة الصحيحة يبني سمعتك بشكل أسرع ويؤدي إلى عمولات متكررة.`,
      ],
      quote: `"سعرك يرتفع حين تتكلم نتائجك بصوت أعلى من عدد متابعيك."`,
      quoteAuthor: 'فريق محتواك',
      bodyAfterQuote: `أخيراً، تواصل باحترافية وسلّم في الوقت المحدد — في كل مرة. العلامات التجارية على محتواك تترك تقييمات بعد كل تعاون، وسجل موثوقية قوي هو أقوى أصل يمكن لصانع المحتوى بناؤه. الصانعون ذوو التقييمات العالية يظهرون أولاً في بحث العلامات التجارية ويتلقون فرص ميزانية حصرية قبل أي شخص آخر.`,
      inlineImg: '/img/blog/b4.jpg',
      figureImg: '/img/blog/b4.jpg',
      tags: ['الأرباح', 'نمو الصانع', 'شراكات العلامات التجارية'],
    },
  },
  2: {
    en: {
      body: [
        `The advertising landscape has shifted dramatically. Where brands once spent the majority of their budgets on polished studio productions and celebrity endorsements, an increasing number are now redirecting those same budgets toward user-generated content — and the results are undeniable.`,
        `Studies consistently show that consumers trust content created by real people far more than content produced by brands themselves. UGC feels unfiltered, relatable, and honest. When a real person shows how a product fits into their actual daily life, viewers respond with the kind of engagement that no amount of production budget can manufacture.`,
        `For brands operating on Muhtawak, the shift to UGC isn't just a trend — it's a fundamental change in how they approach their content strategy. By briefing creators directly through the platform, brands can receive dozens of unique content pieces in the time it would take to produce one traditional ad campaign.`,
      ],
      quote: `"UGC converts at 4x the rate of brand-produced content — because people trust people."`,
      quoteAuthor: 'Muhtawak Team',
      bodyAfterQuote: `The brands seeing the strongest results on Muhtawak are the ones who give creators clear briefs but genuine creative freedom. Over-directing a creator produces content that looks scripted and defeats the purpose. The magic of UGC is in the authentic voice of the creator — and smart brands know to let that voice come through.`,
      inlineImg: '/img/blog/b5.jpg',
      figureImg: '/img/blog/b5.jpg',
      tags: ['UGC', 'Brand Marketing', 'Digital Ads'],
    },
    ar: {
      body: [
        `تغيّر مشهد الإعلان بشكل جذري. حيث كانت العلامات التجارية تنفق معظم ميزانياتها على الإنتاجات الاستوديوية المصقولة وتأييدات المشاهير، بات عدد متزايد منها يعيد توجيه تلك الميزانيات نحو المحتوى الذي ينشئه المستخدمون — والنتائج لا جدال فيها.`,
        `تُظهر الدراسات باستمرار أن المستهلكين يثقون في المحتوى الذي ينشئه أشخاص حقيقيون بكثير أكثر من المحتوى الذي تنتجه العلامات التجارية نفسها. يبدو UGC غير مُصفَّى وقابلاً للتواصل وصادقاً. حين يُظهر شخص حقيقي كيف يتناسب المنتج مع حياته اليومية الفعلية، يستجيب المشاهدون بنوع من التفاعل الذي لا يمكن لأي ميزانية إنتاج أن تصنعه.`,
        `بالنسبة للعلامات التجارية العاملة على محتواك، فإن التحول نحو UGC ليس مجرد اتجاه — بل هو تغيير جوهري في كيفية تعاملها مع استراتيجية المحتوى. من خلال توجيه الصانعين مباشرة عبر المنصة، يمكن للعلامات التجارية الحصول على عشرات القطع الفريدة من المحتوى في الوقت الذي يستغرقه إنتاج حملة إعلانية تقليدية واحدة.`,
      ],
      quote: `"يحقق UGC معدل تحويل أعلى 4 مرات من المحتوى الذي تنتجه العلامات التجارية — لأن الناس يثقون بالناس."`,
      quoteAuthor: 'فريق محتواك',
      bodyAfterQuote: `العلامات التجارية التي تحقق أقوى نتائج على محتواك هي تلك التي تعطي الصانعين توجيهات واضحة لكن مع حرية إبداعية حقيقية. التوجيه المفرط للصانع ينتج محتوى يبدو مكتوباً ويهزم الغرض. سحر UGC يكمن في الصوت الأصيل للصانع — والعلامات التجارية الذكية تعرف أن تترك ذلك الصوت يظهر.`,
      inlineImg: '/img/blog/b5.jpg',
      figureImg: '/img/blog/b5.jpg',
      tags: ['المحتوى المستخدم', 'تسويق العلامات التجارية', 'الإعلانات الرقمية'],
    },
  },
};

/* ─── helpers ─────────────────────────────────────────────────────── */
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

const SocialBtn = ({ icon }) => (
  <a href="#" style={{
    display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
    width: 38, height: 38, borderRadius: '50%', border: '1px solid #eee',
    color: C.text, fontSize: 15, marginLeft: 8, textDecoration: 'none', transition: 'all .2s',
  }}
    onMouseEnter={e => { e.currentTarget.style.background = C.grad; e.currentTarget.style.color = '#fff'; e.currentTarget.style.borderColor = 'transparent'; }}
    onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = C.text; e.currentTarget.style.borderColor = '#eee'; }}
  >{icon}</a>
);

const Widget = ({ children }) => (
  <div style={{ border: '2px solid #f5f0f3', borderRadius: 10, padding: '26px 20px', marginBottom: 26, background: '#fff' }}>
    {children}
  </div>
);

const WidgetTitle = ({ children }) => (
  <div style={{ marginBottom: 20, textAlign: 'center' }}>
    <h4 style={{ fontSize: 18, fontWeight: 700, color: C.primary, margin: 0, display: 'inline-block', paddingBottom: 10, position: 'relative' }}>
      {children}
      <span style={{ position: 'absolute', bottom: 0, left: '50%', transform: 'translateX(-50%)', width: 32, height: 3, borderRadius: 2, background: C.grad }} />
    </h4>
  </div>
);

const inputBase = {
  width: '100%', background: '#fff', border: 'none', borderRadius: 8,
  padding: '13px 18px', fontSize: 14, outline: 'none', boxSizing: 'border-box',
  boxShadow: '3px 4px 15px #0000001a', fontFamily: 'inherit', resize: 'vertical',
};

function FallbackImg({ src, alt, height, style = {} }) {
  const [err, setErr] = React.useState(false);
  if (err) return <div style={{ height, background: 'linear-gradient(135deg,#fdf5f9,#e8d5f0)', ...style }} />;
  return <img src={src} alt={alt} style={style} onError={() => setErr(true)} />;
}

/* ─── Main ────────────────────────────────────────────────────────── */
export default function BlogDetails() {
  const { id }       = useParams();
  const { content }  = useRole();
  const { isRTL }    = useI18n();

  const [form, setForm] = useState({ msg: '', name: '', email: '' });
  const set = field => e => setForm(p => ({ ...p, [field]: e.target.value }));

  useEffect(() => { window.scrollTo(0, 0); }, [id]);

  const posts     = content?.blogs?.posts || [];
  const postIndex = Number(id);
  const post      = posts[postIndex];
  const prevPost  = posts[postIndex - 1];
  const nextPost  = posts[postIndex + 1];

  const related = posts
    .map((p, i) => ({ ...p, i }))
    .filter(p => p.i !== postIndex)
    .slice(0, 2);

  const recentPosts = posts
    .map((p, i) => ({ ...p, i }))
    .filter(p => p.i !== postIndex)
    .slice(0, 4);

  const categories = isRTL
    ? [['أسلوب الحياة', 5], ['سفر', 34], ['موضة', 89], ['موسيقى', 92], ['تسويق', 56]]
    : [['Lifestyle', 5], ['Travel', 34], ['Fashion', 89], ['Music', 92], ['Branding', 56]];

  const articleLang = isRTL ? 'ar' : 'en';
  const article = ARTICLE_CONTENT[postIndex]?.[articleLang] || ARTICLE_CONTENT[0][articleLang];

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
            <Link to="/" style={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'none' }}>
              {isRTL ? 'الرئيسية' : 'Home'}
            </Link>
            <span style={{ color: 'rgba(255,255,255,0.4)' }}>›</span>
            <Link to="/#blog" style={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'none' }}>
              {isRTL ? 'المدونة' : 'Blog'}
            </Link>
            <span style={{ color: 'rgba(255,255,255,0.4)' }}>›</span>
            <span style={{ color: '#ffb3d9', fontWeight: 600 }}>
              {isRTL ? 'تفاصيل المقال' : 'Post Details'}
            </span>
          </nav>
        </div>
      </section>

      {/* ── Main content ────────────────────────────────────── */}
      <section style={{ padding: '70px 0' }}>
        <div style={{ maxWidth: 1180, margin: '0 auto', padding: '0 20px' }}>
          <div style={{ display: 'flex', gap: 40, flexWrap: 'wrap', alignItems: 'flex-start' }}>

            {/* ══ Article ══════════════════════════════════════ */}
            <div style={{ flex: '1 1 620px', minWidth: 0 }}>

              {/* Hero image */}
              <FallbackImg src={article.inlineImg} alt={post.title} height={440} style={{
                width: '100%', objectFit: 'cover', borderRadius: 14,
                boxShadow: '0 10px 50px rgba(107,0,62,0.18)', marginBottom: 32, display: 'block',
              }} />

              {/* Meta row */}
              <div style={{
                display: 'flex', flexWrap: 'wrap', gap: 16, marginBottom: 24,
                paddingBottom: 20, borderBottom: '1px solid #f0e0ea',
                fontSize: 13, alignItems: 'center',
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                  <img
                    src={post.authorImg || 'img/blog/admin-img.png'}
                    alt={post.author}
                    style={{ width: 40, height: 40, borderRadius: '50%', objectFit: 'cover', border: '2px solid #6b003e' }}
                    onError={e => e.target.style.display = 'none'}
                  />
                  <div>
                    <div style={{ fontWeight: 700, color: C.primary, fontSize: 14 }}>{post.author}</div>
                    <div style={{ color: '#aaa', fontSize: 12 }}>{post.authorRole}</div>
                  </div>
                </div>
                <div style={{
                  background: C.grad, color: '#fff', borderRadius: 20,
                  padding: '5px 16px', fontSize: 12, fontWeight: 600,
                }}>
                  📅 {post.date}
                </div>
              </div>

              {/* Excerpt as styled lead */}
              <p style={{
                fontSize: 16, color: '#444', lineHeight: 1.85, marginBottom: 28,
                borderLeft: isRTL ? 'none' : '4px solid #6b003e',
                borderRight: isRTL ? '4px solid #6b003e' : 'none',
                paddingLeft: isRTL ? 0 : 20,
                paddingRight: isRTL ? 20 : 0,
                fontStyle: 'italic',
              }}>
                {post.excerpt}
              </p>

              {/* Article body paragraphs */}
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
                <span style={{
                  position: 'absolute',
                  [isRTL ? 'right' : 'left']: 22,
                  top: 20, fontSize: 56, opacity: .15,
                  lineHeight: 1, fontFamily: 'Georgia, serif',
                }}>❝</span>
                {article.quote}
                <footer style={{ marginTop: 14, fontWeight: 700, fontSize: 13, opacity: 0.82 }}>
                  — {article.quoteAuthor}
                </footer>
              </blockquote>

              {/* Body after quote */}
              <p style={{ fontSize: 15, lineHeight: 1.9, color: '#555', marginBottom: 28 }}>
                {article.bodyAfterQuote}
              </p>

              {/* Figure image + pull text */}
              <div style={{ overflow: 'hidden', marginBottom: 38 }}>
                <FallbackImg src={article.figureImg} alt="" height={190} style={{
                  float: isRTL ? 'right' : 'left',
                  width: 250, objectFit: 'cover', borderRadius: 10,
                  [isRTL ? 'marginLeft' : 'marginRight']: 26,
                  marginBottom: 12,
                  boxShadow: '0 4px 20px rgba(107,0,62,0.1)',
                }} />
                <p style={{ fontSize: 15, lineHeight: 1.9, color: '#555' }}>
                  {isRTL
                    ? 'منصة محتواك مصممة لتمكين كل صانع محتوى من الوصول إلى الفرص المناسبة بصرف النظر عن حجم متابعيه. ما يهم هو جودة ما تقدمه وقدرتك على بناء ثقة حقيقية مع الجمهور الذي يتفاعل معك بانتظام.'
                    : 'Muhtawak is built to empower every creator to access the right opportunities regardless of follower count. What matters is the quality of what you deliver and your ability to build genuine trust with an audience that engages with you consistently.'}
                </p>
              </div>

              {/* Tags + Social share */}
              <div style={{
                display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap',
                gap: 20, paddingTop: 24, borderTop: '1px solid #f0e0ea', marginBottom: 36,
              }}>
                <div>
                  <h5 style={{ fontSize: 13, fontWeight: 700, color: C.primary, marginBottom: 10, textTransform: 'uppercase', letterSpacing: 1 }}>
                    {isRTL ? 'الوسوم' : 'Tags'}
                  </h5>
                  {article.tags.map(t => <TagLink key={t}>{t}</TagLink>)}
                </div>
                <div style={{ textAlign: isRTL ? 'left' : 'right' }}>
                  <h5 style={{ fontSize: 13, fontWeight: 700, color: C.primary, marginBottom: 10, textTransform: 'uppercase', letterSpacing: 1 }}>
                    {isRTL ? 'مشاركة' : 'Share'}
                  </h5>
                  {['𝕏', '𝓟', '𝐟', '📷'].map((ic, i) => <SocialBtn key={i} icon={ic} />)}
                </div>
              </div>

              {/* Prev / Next navigation */}
              {(prevPost || nextPost) && (
                <div style={{
                  display: 'flex', borderTop: '1px solid #f0e0ea', borderBottom: '1px solid #f0e0ea',
                  marginBottom: 52,
                }}>
                  {prevPost ? (
                    <Link to={`/blog/${postIndex - 1}`} style={{
                      flex: 1, textDecoration: 'none', padding: '22px 20px',
                      borderRight: isRTL ? 'none' : (nextPost ? '1px solid #f0e0ea' : 'none'),
                      borderLeft: isRTL ? (nextPost ? '1px solid #f0e0ea' : 'none') : 'none',
                      transition: 'background .2s',
                    }}
                      onMouseEnter={e => e.currentTarget.style.background = '#fdf5f9'}
                      onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
                    >
                      <span style={{ fontSize: 11, textTransform: 'uppercase', letterSpacing: 2, color: '#bbb', display: 'block', marginBottom: 7 }}>
                        {isRTL ? '← السابق' : '← Prev'}
                      </span>
                      <span style={{ fontSize: 14, fontWeight: 700, color: C.primary, lineHeight: 1.4, display: 'block' }}>
                        {prevPost.title}
                      </span>
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
                      <span style={{ fontSize: 11, textTransform: 'uppercase', letterSpacing: 2, color: '#bbb', display: 'block', marginBottom: 7 }}>
                        {isRTL ? 'التالي →' : 'Next →'}
                      </span>
                      <span style={{ fontSize: 14, fontWeight: 700, color: C.primary, lineHeight: 1.4, display: 'block' }}>
                        {nextPost.title}
                      </span>
                    </Link>
                  )}
                </div>
              )}

              {/* Related posts */}
              {/* {related.length > 0 && (
                <div style={{ marginBottom: 52 }}>
                  <h4 style={{ fontSize: 22, fontWeight: 700, color: C.primary, marginBottom: 24 }}>
                    {isRTL ? 'مقالات ذات صلة' : 'Related Posts'}
                  </h4>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }}>
                    {related.map((p) => (
                      <Link key={p.i} to={`/blog/${p.i}`} style={{ textDecoration: 'none' }}>
                        <div style={{
                          borderRadius: 12, overflow: 'hidden',
                          boxShadow: '0 4px 24px rgba(107,0,62,0.1)', transition: 'transform .25s, box-shadow .25s',
                        }}
                          onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-6px)'; e.currentTarget.style.boxShadow = '0 14px 44px rgba(107,0,62,0.2)'; }}
                          onMouseLeave={e => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = '0 4px 24px rgba(107,0,62,0.1)'; }}
                        >
                          <img src={p.img} alt="" height={155} style={{ width: '100%', objectFit: 'cover', display: 'block' }} />
                          <div style={{ padding: '16px 18px', background: '#fff' }}>
                            <div style={{
                              display: 'inline-block', background: C.grad, color: '#fff',
                              fontSize: 11, fontWeight: 600, borderRadius: 12,
                              padding: '3px 10px', marginBottom: 8,
                            }}>{p.date}</div>
                            <h3 style={{ margin: 0, fontSize: 14, fontWeight: 700, color: C.primary, lineHeight: 1.45 }}>{p.title}</h3>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )} */}

              {/* Author box */}
              <div style={{
                background: 'linear-gradient(135deg,#fdf5f9 0%,#f5e6f0 100%)',
                borderRadius: 16, padding: '44px 28px 32px',
                textAlign: 'center', marginBottom: 50,
                border: '1px solid #f0d8e8',
                position: 'relative',
              }}>
                <div style={{
                  position: 'absolute', top: -40, left: '50%', transform: 'translateX(-50%)',
                  width: 82, height: 82, borderRadius: '50%', overflow: 'hidden',
                  border: '4px solid #fff', boxShadow: '0 6px 24px rgba(107,0,62,0.22)',
                  background: C.grad,
                }}>
                  <img
                    src={post.authorImg || 'img/blog/admin-img.png'}
                    alt={post.author}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    onError={e => e.target.style.opacity = 0}
                  />
                </div>
                <h5 style={{ fontSize: 20, fontWeight: 700, color: C.primary, marginBottom: 4 }}>{post.author}</h5>
                <p style={{ fontSize: 13, color: '#9a0058', marginBottom: 14, fontWeight: 600 }}>{post.authorRole}</p>
                <div style={{ marginBottom: 16 }}>
                  {['𝐟', '𝕏', '📷', '𝓛'].map((ic, i) => <SocialBtn key={i} icon={ic} />)}
                </div>
                <p style={{ fontSize: 14, maxWidth: 500, margin: '0 auto', lineHeight: 1.75, color: '#666' }}>
                  {isRTL
                    ? 'فريق محتواك مكرّس لتمكين صنّاع المحتوى والعلامات التجارية من التواصل بطريقة تحقق نتائج حقيقية وتبني علاقات مستدامة تدوم على المدى الطويل.'
                    : 'The Muhtawak team is dedicated to empowering content creators and brands to connect in ways that drive real results and build lasting relationships for the long term.'}
                </p>
              </div>

          
            </div>{/* /article */}

          </div>
        </div>
      </section>
    </div>
  );
}