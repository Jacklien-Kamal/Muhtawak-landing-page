import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useRole } from '../hooks/roleContext';
import { useI18n } from '../hooks/i18nContext';

/* ─── colour tokens ───────────────────────────────────────────────── */
const C = {
  primary: '#190a32',
  pink:    '#ff3494',
  purple:  '#7D4196',
  grad:    'linear-gradient(90deg,#7D4196 0%,#FF3494 100%)',
  text:    '#666666',
  light:   '#f4f4fe',
};

/* ─── static extra content (body, quote, tags, etc.) ─────────────── */
// These are details not stored in roleContext posts.
// You can move them into roleContext later if needed.
const STATIC_EXTRA = {
  body: [
    `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt
     ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
     laboris nisi ut aliquip ex ea commodo amet set for your cool happiness for your loyal city.`,
    `Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
     laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
     architecto beatae vitae dicta sunt explicabo.`,
  ],
  quote: `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
          incididunt with ut labore et dolore magna aliqua. Ut enim ad minim veniam.`,
  quoteAuthor: 'Rosalina Pong',
  bodyAfterQuote: `Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                   fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                   culpa qui officia deserunt mollit anim id est laborum.`,
  inlineImg:  'img/blog/b_details01.jpg',
  figureImg:  'img/blog/b_details02.jpg',
  tags: ['organic', 'Foods', 'tasty'],
};

const COMMENTS = [
  { name: 'ALina Kelian',  date: '19th May 2018', text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore.', indent: false },
  { name: 'Rlex Kelian',   date: '19th May 2018', text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod incididunt ut labore.',        indent: true  },
  { name: 'Roboto Alex',   date: '21st May 2018', text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor ut labore et dolore.',   indent: false },
];

/* ─── tiny helpers ──────────────────────────────────────────────── */
const GradBtn = ({ children, style = {} }) => (
  <button style={{
    background: C.grad, boxShadow: '3px 4px 25px #C63A9580',
    border: 'none', borderRadius: 50, color: '#fff',
    fontSize: 15, fontWeight: 500, padding: '12px 32px',
    cursor: 'pointer', fontFamily: 'inherit', ...style,
  }}>{children}</button>
);

const TagLink = ({ children }) => (
  <a href="#" style={{
    display: 'inline-block', border: '2px solid #e5e5e5', padding: '9px 16px',
    borderRadius: 3, fontSize: 13, fontWeight: 500, color: C.text,
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
  <div style={{ border: '2px solid #f5f8fa', borderRadius: 10, padding: '28px 22px', marginBottom: 28, background: '#fff' }}>
    {children}
  </div>
);

const WidgetTitle = ({ children }) => (
  <div style={{ marginBottom: 24, textAlign: 'center' }}>
    <h4 style={{ fontSize: 20, fontWeight: 700, color: C.primary, margin: 0, display: 'inline-block', paddingBottom: 10, position: 'relative' }}>
      {children}
      <span style={{ position: 'absolute', bottom: 0, left: '50%', transform: 'translateX(-50%)', width: 36, height: 3, borderRadius: 2, background: C.grad }} />
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
  if (err) return <div style={{ height, background: 'linear-gradient(135deg,#f4f4fe,#e8e0f5)', ...style }} />;
  return <img src={src} alt={alt} style={style} onError={() => setErr(true)} />;
}

/* ─── Main ──────────────────────────────────────────────────────── */
export default function BlogDetails() {
  const { id } = useParams();
  const { content } = useRole();
  const { isRTL } = useI18n();

  const [form, setForm] = useState({ msg: '', name: '', email: '', web: '' });
  const set = field => e => setForm(p => ({ ...p, [field]: e.target.value }));
useEffect(() => {
  // Scroll to top when post changes
  window.scrollTo(0, 0);
},[id])
  // ── Get the real post from roleContext using the URL id ──
  const posts = content?.blogs?.posts || [];
  const postIndex = Number(id);
  const post = posts[postIndex];

  // Prev / Next navigation based on real posts array
  const prevPost = posts[postIndex - 1];
  const nextPost = posts[postIndex + 1];

  // Related posts: the two posts closest to this one (excluding current)
  const related = posts
    .filter((_, i) => i !== postIndex)
    .slice(0, 2)
    .map((p, i) => ({
      img: p.img,
      title: p.title,
      to: `/blog/${posts.indexOf(p)}`,
    }));

  // Sidebar data
  const categories = [['Lifestyle',5],['Travel',34],['Fashion',89],['Music',92],['Branding',56]];
  const feeds = [
    'Alonso kelina falao asiano pero',
    'It is a long established fact that a reader',
    'Many desktop publish packages and web',
    'Various versions have evolved over the years',
  ];

  // Handle missing post
  if (!post) {
    return (
      <div style={{ padding: '120px 20px', textAlign: 'center', fontFamily: "'Poppins', sans-serif" }}>
        <h2 style={{ color: C.primary, marginBottom: 16 }}>Post not found</h2>
        <Link to="/" style={{ color: C.purple, fontWeight: 600 }}>← Back to Home</Link>
      </div>
    );
  }

  return (
    <div style={{ fontFamily: "'Poppins', sans-serif", color: C.text, background: '#fff' }} dir={isRTL ? 'rtl' : 'ltr'}>

      {/* ── Breadcrumb ─────────────────────────────────────────── */}
      <section style={{
        minHeight: 340,
        background: `linear-gradient(rgba(25,10,50,.65),rgba(25,10,50,.65)),
                     url('img/testimonial/test-bg.jpg') center/cover no-repeat`,
        display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center',
      }}>
        <div>
          <h2 style={{ color: '#fff', fontSize: 46, fontWeight: 700, margin: '0 0 14px' }}>News Details</h2>
          <nav style={{ display: 'flex', gap: 10, justifyContent: 'center', fontSize: 15 }}>
            <Link to="/" style={{ color: '#ddd', textDecoration: 'none' }}>Home</Link>
            <span style={{ color: '#ddd' }}>&gt;</span>
            <span style={{ color: C.pink, fontWeight: 500 }}>News Details</span>
          </nav>
        </div>
      </section>

      {/* ── Content ────────────────────────────────────────────── */}
      <section style={{ padding: '80px 0' }}>
        <div style={{ maxWidth: 1180, margin: '0 auto', padding: '0 20px' }}>
          <div style={{ display: 'flex', gap: 40, flexWrap: 'wrap', alignItems: 'flex-start' }}>

            {/* ══ Article ════════════════════════════════════════ */}
            <div style={{ flex: '1 1 620px', minWidth: 0 }}>

              {/* ── Hero image from real post ── */}
              <FallbackImg src={post.img} alt={post.title} height={420} style={{
                width: '100%', objectFit: 'cover', borderRadius: 12,
                boxShadow: '3px 4px 25px #0000001a', marginBottom: 28, display: 'block',
              }} />

              {/* ── Meta: author & date from real post ── */}
              <div style={{ display: 'flex', gap: 24, marginBottom: 18, fontSize: 14 }}>
                <span>👤 by {post.author}</span>
                <span>📅 {post.date}</span>
              </div>

              {/* ── Title from real post ── */}
              <h2 style={{ fontSize: 26, fontWeight: 700, color: C.primary, lineHeight: 1.4, marginBottom: 20 }}>
                {post.title}
              </h2>

              {/* ── Excerpt from real post ── */}
              {post.excerpt && (
                <p style={{ fontSize: 15, color: C.text, marginBottom: 16 }}>{post.excerpt}</p>
              )}

              {/* ── Body (static extra content) ── */}
              {/* {STATIC_EXTRA.body.map((p, i) => <p key={i}>{p}</p>)} */}

              <blockquote style={{
                background: C.grad, padding: '26px 36px 26px 76px', borderRadius: 10,
                color: '#fff', lineHeight: 1.75, margin: '32px 0', position: 'relative', fontSize: 14,
              }}>
                <span style={{ position: 'absolute', left: 22, top: 24, fontSize: 38, opacity: .22, lineHeight: 1 }}>❝</span>
                {STATIC_EXTRA.quote}
                <footer style={{ marginTop: 12, fontWeight: 600, fontSize: 13 }}>— {STATIC_EXTRA.quoteAuthor}</footer>
              </blockquote>

              <p>{STATIC_EXTRA.bodyAfterQuote}</p>

              <FallbackImg src={STATIC_EXTRA.inlineImg} alt="" height={220} style={{
                width: '100%', objectFit: 'cover', borderRadius: 10,
                boxShadow: '3px 4px 20px #0000001a', margin: '28px 0', display: 'block',
              }} />

              <div style={{ overflow: 'hidden', marginBottom: 36 }}>
                <FallbackImg src={STATIC_EXTRA.figureImg} alt="" height={160} style={{
                  float: isRTL ? 'right' : 'left', width: 220, objectFit: 'cover',
                  borderRadius: 8,
                  [isRTL ? 'marginLeft' : 'marginRight']: 24, marginBottom: 8,
                }} />
                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
                   doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore
                   veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
              </div>

              {/* Tags + Share */}
              <div style={{
                display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap',
                gap: 20, paddingTop: 24, borderTop: '1px solid #eee', marginBottom: 32,
              }}>
              
                <div style={{ textAlign: isRTL ? 'left' : 'right' }}>
                  <h5 style={{ fontSize: 15, fontWeight: 700, color: C.primary, marginBottom: 10 }}>Social Share</h5>
                  {['𝕏','𝓟','𝐟','📷'].map((ic, i) => <SocialBtn key={i} icon={ic} />)}
                </div>
              </div>

              {/* Post navigation — uses real posts */}
              <div style={{
                display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                padding: '24px 0', borderTop: '1px solid #eaeaea', borderBottom: '1px solid #eaeaea',
                marginBottom: 48, flexWrap: 'wrap', gap: 16,
              }}>
                {prevPost ? (
                  <div>
                    <span style={{ fontSize: 11, textTransform: 'uppercase', letterSpacing: 2 }}>Prev Post</span>
                    <h4 style={{ margin: '4px 0 0', fontSize: 17, fontWeight: 700, color: C.primary }}>
                      <Link to={`/blog/${postIndex - 1}`} style={{ color: 'inherit', textDecoration: 'none' }}>
                        {prevPost.title}
                      </Link>
                    </h4>
                  </div>
                ) : <div />}
                {nextPost ? (
                  <div style={{ textAlign: 'right' }}>
                    <span style={{ fontSize: 11, textTransform: 'uppercase', letterSpacing: 2 }}>Next Post</span>
                    <h4 style={{ margin: '4px 0 0', fontSize: 17, fontWeight: 700, color: C.primary }}>
                      <Link to={`/blog/${postIndex + 1}`} style={{ color: 'inherit', textDecoration: 'none' }}>
                        {nextPost.title}
                      </Link>
                    </h4>
                  </div>
                ) : <div />}
              </div>

              {/* Related posts — uses real posts */}
              {related.length > 0 && (
                <div style={{ marginBottom: 52 }}>
                  <h4 style={{ fontSize: 22, fontWeight: 700, color: C.primary, marginBottom: 22 }}>Related Post</h4>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 22 }}>
                    {related.map((p, i) => (
                      <Link key={i} to={p.to} style={{ textDecoration: 'none' }}>
                        <div style={{ borderRadius: 10, overflow: 'hidden', boxShadow: '3px 4px 20px #0000001a', transition: '.25s' }}
                             onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-4px)'}
                             onMouseLeave={e => e.currentTarget.style.transform = 'none'}>
                          <FallbackImg src={p.img} alt="" height={148} style={{ width: '100%', objectFit: 'cover', display: 'block' }} />
                          <div style={{ padding: '16px 18px', background: '#fff' }}>
                            <h3 style={{ margin: 0, fontSize: 14, fontWeight: 600, color: C.primary, lineHeight: 1.4 }}>{p.title}</h3>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}

           
</div>
      
          </div>
        </div>
      </section>
    </div>
  );
}