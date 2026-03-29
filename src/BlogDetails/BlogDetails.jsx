import React, { useState } from 'react';

/* ─── colour tokens (matching style.css) ─────────────────────────── */
const C = {
  primary: '#190a32',
  pink: '#ff3494',
  purple: '#7D4196',
  grad: 'linear-gradient(90deg,#7D4196 0%,#FF3494 100%)',
  text: '#666666',
  light: '#f4f4fe',
};

/* ─── tiny helpers ───────────────────────────────────────────────── */
const GradBtn = ({ children, style = {}, className = '', ...p }) => (
  <button
    {...p}
    className={className}
    style={{
      background: C.grad,
      boxShadow: '3px 4px 25px #C63A9580',
      border: 'none',
      borderRadius: 50,
      color: '#fff',
      fontSize: 16,
      fontWeight: 500,
      padding: '12px 32px',
      cursor: 'pointer',
      ...style,
    }}
  >
    {children}
  </button>
);

const Tag = ({ children }) => (
  <a
    href="#"
    style={{
      display: 'inline-block',
      border: '2px solid #e5e5e5',
      padding: '10px 16px',
      borderRadius: 3,
      fontSize: 13,
      fontWeight: 500,
      color: C.text,
      textDecoration: 'none',
      marginRight: 10,
      marginBottom: 8,
      transition: 'all .2s',
    }}
    onMouseEnter={e => {
      e.currentTarget.style.background = C.grad;
      e.currentTarget.style.color = '#fff';
      e.currentTarget.style.borderColor = 'transparent';
    }}
    onMouseLeave={e => {
      e.currentTarget.style.background = 'transparent';
      e.currentTarget.style.color = C.text;
      e.currentTarget.style.borderColor = '#e5e5e5';
    }}
  >
    {children}
  </a>
);

const SocialIcon = ({ icon }) => (
  <a
    href="#"
    style={{
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: 38,
      height: 38,
      borderRadius: '50%',
      border: '1px solid #eee',
      color: C.text,
      fontSize: 15,
      marginLeft: 8,
      textDecoration: 'none',
      transition: 'all .2s',
    }}
    onMouseEnter={e => {
      e.currentTarget.style.background = C.grad;
      e.currentTarget.style.color = '#fff';
      e.currentTarget.style.borderColor = 'transparent';
    }}
    onMouseLeave={e => {
      e.currentTarget.style.background = 'transparent';
      e.currentTarget.style.color = C.text;
      e.currentTarget.style.borderColor = '#eee';
    }}
  >
    {icon}
  </a>
);

/* ─── Sidebar widgets ─────────────────────────────────────────────── */
const WidgetTitle = ({ children }) => (
  <div style={{ marginBottom: 28, textAlign: 'center' }}>
    <h4
      style={{
        fontSize: 22,
        fontWeight: 700,
        color: C.primary,
        margin: 0,
        position: 'relative',
        display: 'inline-block',
        paddingBottom: 10,
      }}
    >
      {children}
      <span
        style={{
          position: 'absolute',
          bottom: 0,
          left: '50%',
          transform: 'translateX(-50%)',
          width: 40,
          height: 3,
          borderRadius: 2,
          background: C.grad,
        }}
      />
    </h4>
  </div>
);

const Widget = ({ children, style = {} }) => (
  <div
    style={{
      border: '2px solid #f5f8fa',
      borderRadius: 10,
      padding: '28px 22px',
      marginBottom: 28,
      background: '#fff',
      ...style,
    }}
  >
    {children}
  </div>
);

/* ─── Main component ──────────────────────────────────────────────── */
export default function BlogDetails() {
  const [comment, setComment] = useState({ msg: '', name: '', email: '', web: '' });

  const categories = [
    ['Lifestyle', 5], ['Travel', 34], ['Fashion', 89],
    ['Music', 92], ['Branding', 56],
  ];

  const recentPosts = [
    { title: 'Alonso kelina falao asiano pero', time: '1 Hours ago' },
    { title: 'It is a long established fact that a reader', time: '3 Hours ago' },
    { title: 'Many desktop publish packages and web', time: '5 Hours ago' },
    { title: 'Various versions have evolved over the years', time: '6 Hours ago' },
  ];

  const comments = [
    {
      name: 'ALina Kelian',
      date: '19th May 2018',
      text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      indent: false,
    },
    {
      name: 'Rlex Kelian ★',
      date: '19th May 2018',
      text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.',
      indent: true,
    },
    {
      name: 'Roboto Alex',
      date: '21st May 2018',
      text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      indent: false,
    },
  ];

  return (
    <div style={{ fontFamily: "'Poppins', sans-serif", color: C.text, background: '#fff' }}>

      {/* ── Breadcrumb ── */}
      <section
        style={{
          minHeight: 360,
          background: `linear-gradient(rgba(25,10,50,.65),rgba(25,10,50,.65)),
                       url('img/testimonial/test-bg.jpg') center/cover no-repeat`,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
        }}
      >
        <div>
          <h2 style={{ color: '#fff', fontSize: 52, fontWeight: 700, margin: '0 0 16px' }}>
            News Details
          </h2>
          <nav style={{ display: 'flex', gap: 12, justifyContent: 'center', fontSize: 15 }}>
            <a href="#" style={{ color: '#ddd', textDecoration: 'none' }}>Home</a>
            <span style={{ color: '#ddd' }}>&gt;</span>
            <span style={{ color: C.pink, fontWeight: 500 }}>News Details</span>
          </nav>
        </div>
      </section>

      {/* ── Main content ── */}
      <section style={{ padding: '80px 0' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 20px' }}>
          <div style={{ display: 'flex', gap: 40, flexWrap: 'wrap' }}>

            {/* ════════ LEFT: Blog post ════════ */}
            <div style={{ flex: '1 1 620px', minWidth: 0 }}>

              {/* Featured image */}
              <div style={{ borderRadius: 12, overflow: 'hidden', marginBottom: 28, boxShadow: '3px 4px 25px #0000001a' }}>
                <img
                  src="img/blog/inner_b1.jpg"
                  alt="blog"
                  style={{ width: '100%', display: 'block', objectFit: 'cover', maxHeight: 420 }}
                  onError={e => {
                    e.target.style.display = 'none';
                    e.target.parentElement.style.background = 'linear-gradient(135deg,#7D4196,#FF3494)';
                    e.target.parentElement.style.height = 320;
                  }}
                />
              </div>

              {/* Meta */}
              <div style={{ display: 'flex', gap: 24, marginBottom: 20, fontSize: 14 }}>
                {[['👤', 'by Zcube'], ['💬', '35 Comments']].map(([icon, label]) => (
                  <span key={label} style={{ color: C.text }}>
                    <span style={{ marginRight: 5 }}>{icon}</span>{label}
                  </span>
                ))}
              </div>

              {/* Heading */}
              <h2 style={{ fontSize: 28, fontWeight: 700, color: C.primary, lineHeight: 1.35, marginBottom: 20 }}>
                With our vastly improved notifications system, users have more control on your mind.
              </h2>

              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo amet set for your cool happiness for your loyal city.</p>

              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>

              {/* Blockquote */}
              <blockquote
                style={{
                  background: C.grad,
                  padding: '28px 36px 28px 80px',
                  borderRadius: 10,
                  color: '#fff',
                  lineHeight: 1.75,
                  margin: '36px 0',
                  position: 'relative',
                  fontSize: 14,
                }}
              >
                <span
                  style={{
                    position: 'absolute',
                    left: 24,
                    top: 28,
                    fontSize: 40,
                    opacity: 0.25,
                    lineHeight: 1,
                  }}
                >
                  ❝
                </span>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt with ut labore et dolore magna aliqua.
                <footer style={{ marginTop: 14, fontWeight: 600, fontSize: 13 }}>— Rosalina Pong</footer>
              </blockquote>

              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>

              {/* Inline image */}
              <div style={{ borderRadius: 10, overflow: 'hidden', margin: '32px 0', boxShadow: '3px 4px 20px #0000001a' }}>
                <img
                  src="img/blog/b_details01.jpg"
                  alt=""
                  style={{ width: '100%', display: 'block' }}
                  onError={e => {
                    e.target.style.display = 'none';
                    e.target.parentElement.style.height = 200;
                    e.target.parentElement.style.background = 'linear-gradient(135deg,#f4f4fe,#e8e0f5)';
                  }}
                />
              </div>

              <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>

              {/* Figure with float image */}
              <div style={{ overflow: 'hidden', marginBottom: 40 }}>
                <img
                  src="img/blog/b_details02.jpg"
                  alt=""
                  style={{ float: 'left', width: 240, borderRadius: 8, marginRight: 24, marginBottom: 12 }}
                  onError={e => {
                    e.target.style.display = 'none';
                  }}
                />
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
              </div>

              {/* Tags + Social Share */}
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  flexWrap: 'wrap',
                  gap: 20,
                  paddingTop: 24,
                  borderTop: '1px solid #eee',
                  marginBottom: 32,
                }}
              >
                <div>
                  <h5 style={{ fontSize: 16, fontWeight: 700, color: C.primary, marginBottom: 12 }}>Related Tags</h5>
                  <div>{['organic', 'Foods', 'tasty'].map(t => <Tag key={t}>{t}</Tag>)}</div>
                </div>
                <div style={{ textAlign: 'right' }}>
                  <h5 style={{ fontSize: 16, fontWeight: 700, color: C.primary, marginBottom: 12 }}>Social Share</h5>
                  <div>
                    {['𝕏', '𝓟', '𝐟', '📷'].map((ic, i) => <SocialIcon key={i} icon={ic} />)}
                  </div>
                </div>
              </div>

              {/* Post Navigation */}
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  padding: '28px 0',
                  borderTop: '1px solid #eaeaea',
                  borderBottom: '1px solid #eaeaea',
                  marginBottom: 48,
                  flexWrap: 'wrap',
                  gap: 16,
                }}
              >
                <div>
                  <span style={{ fontSize: 12, textTransform: 'uppercase', letterSpacing: 2, color: C.text }}>Prev Post</span>
                  <h4 style={{ margin: '4px 0 0', fontSize: 18, fontWeight: 700, color: C.primary }}>
                    <a href="#" style={{ color: 'inherit', textDecoration: 'none' }}>Tips on Minimalist</a>
                  </h4>
                </div>
                <div style={{ textAlign: 'right' }}>
                  <span style={{ fontSize: 12, textTransform: 'uppercase', letterSpacing: 2, color: C.text }}>Next Post</span>
                  <h4 style={{ margin: '4px 0 0', fontSize: 18, fontWeight: 700, color: C.primary }}>
                    <a href="#" style={{ color: 'inherit', textDecoration: 'none' }}>Less Is More</a>
                  </h4>
                </div>
              </div>

              {/* Related Posts */}
              <div style={{ marginBottom: 56 }}>
                <h4 style={{ fontSize: 22, fontWeight: 700, color: C.primary, marginBottom: 24 }}>Related Post</h4>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }}>
                  {[
                    { img: 'img/blog/b_details03.jpg', title: 'A series of iOS 7 inspire vector icons.' },
                    { img: 'img/blog/b_details04.jpg', title: 'Sed ut perspiciatis unde omnis iste natus.' },
                  ].map((post, i) => (
                    <div
                      key={i}
                      style={{ borderRadius: 10, overflow: 'hidden', boxShadow: '3px 4px 20px #0000001a', transition: '.3s' }}
                      onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-4px)'}
                      onMouseLeave={e => e.currentTarget.style.transform = 'none'}
                    >
                      <img
                        src={post.img}
                        alt=""
                        style={{ width: '100%', height: 160, objectFit: 'cover', display: 'block' }}
                        onError={e => {
                          e.target.style.display = 'none';
                          e.target.parentElement.style.background = 'linear-gradient(135deg,#f4f4fe,#e8e0f5)';
                          e.target.parentElement.style.height = 160;
                        }}
                      />
                      <div style={{ padding: '18px 20px', background: '#fff' }}>
                        <h3 style={{ fontSize: 15, fontWeight: 600, color: C.primary, marginBottom: 8, lineHeight: 1.4 }}>
                          <a href="#" style={{ color: 'inherit', textDecoration: 'none' }}>{post.title}</a>
                        </h3>
                        <p style={{ fontSize: 13, margin: 0 }}>
                          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Author avatar */}
              <div
                style={{
                  background: '#f5f8fa',
                  borderRadius: 12,
                  padding: '40px 32px',
                  textAlign: 'center',
                  marginBottom: 48,
                }}
              >
                <div
                  style={{
                    width: 90,
                    height: 90,
                    borderRadius: '50%',
                    background: C.grad,
                    margin: '-75px auto 20px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: 32,
                    boxShadow: '3px 4px 20px #C63A9540',
                    border: '4px solid #fff',
                  }}
                >
                  👤
                </div>
                <h5 style={{ fontSize: 22, fontWeight: 700, color: C.primary, marginBottom: 8 }}>Rosalina William</h5>
                <div style={{ marginBottom: 16 }}>
                  {['𝐟', '𝕏', '📷', '𝓛'].map((ic, i) => <SocialIcon key={i} icon={ic} />)}
                </div>
                <p style={{ fontSize: 14, maxWidth: 520, margin: '0 auto' }}>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>

              {/* Comments */}
              <div style={{ marginBottom: 48 }}>
                <h5 style={{ fontSize: 22, fontWeight: 700, color: C.primary, marginBottom: 28 }}>Comments</h5>
                {comments.map((c, i) => (
                  <div
                    key={i}
                    style={{
                      display: 'flex',
                      gap: 20,
                      marginBottom: 28,
                      marginLeft: c.indent ? 60 : 0,
                      paddingBottom: 28,
                      borderBottom: i < comments.length - 1 ? '1px solid #f0f0f0' : 'none',
                    }}
                  >
                    <div
                      style={{
                        flexShrink: 0,
                        width: 56,
                        height: 56,
                        borderRadius: '50%',
                        background: 'linear-gradient(135deg,#f4f4fe,#e8e0f5)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: 22,
                      }}
                    >
                      👤
                    </div>
                    <div style={{ flex: 1 }}>
                      <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: 12, marginBottom: 8 }}>
                        <h6 style={{ margin: 0, fontSize: 16, fontWeight: 700, color: C.primary }}>{c.name}</h6>
                        <span style={{ fontSize: 12, letterSpacing: 1, color: C.pink, textTransform: 'uppercase' }}>{c.date}</span>
                        <button
                          style={{
                            marginLeft: 'auto',
                            background: 'none',
                            border: '2px solid #eee',
                            borderRadius: 50,
                            padding: '5px 16px',
                            fontSize: 13,
                            cursor: 'pointer',
                            color: C.text,
                          }}
                          onMouseEnter={e => { e.currentTarget.style.background = C.grad; e.currentTarget.style.color = '#fff'; e.currentTarget.style.borderColor = 'transparent'; }}
                          onMouseLeave={e => { e.currentTarget.style.background = 'none'; e.currentTarget.style.color = C.text; e.currentTarget.style.borderColor = '#eee'; }}
                        >
                          ↩ Reply
                        </button>
                      </div>
                      <p style={{ fontSize: 14, margin: 0 }}>{c.text}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Comment Form */}
              <div
                style={{
                  background: '#f5f8fa',
                  borderRadius: 12,
                  padding: '36px 32px',
                }}
              >
                <h5 style={{ fontSize: 22, fontWeight: 700, color: C.primary, marginBottom: 24 }}>Post Comment</h5>
                <div style={{ display: 'grid', gap: 16 }}>
                  <textarea
                    rows={5}
                    placeholder="Type your comments...."
                    value={comment.msg}
                    onChange={e => setComment(p => ({ ...p, msg: e.target.value }))}
                    style={inputStyle}
                  />
                  {[
                    ['name', 'Type your name....'],
                    ['email', 'Type your email....'],
                    ['web', 'Type your website....'],
                  ].map(([field, ph]) => (
                    <input
                      key={field}
                      type={field === 'email' ? 'email' : 'text'}
                      placeholder={ph}
                      value={comment[field]}
                      onChange={e => setComment(p => ({ ...p, [field]: e.target.value }))}
                      style={inputStyle}
                    />
                  ))}
                  <div>
                    <GradBtn>Post Comments</GradBtn>
                  </div>
                </div>
              </div>
            </div>

            {/* ════════ RIGHT: Sidebar ════════ */}
            <aside style={{ width: 300, flexShrink: 0 }}>

              {/* Search */}
              <Widget>
                <WidgetTitle>Search</WidgetTitle>
                <div style={{ position: 'relative' }}>
                  <input
                    type="text"
                    placeholder="Search your keyword..."
                    style={{
                      width: '100%',
                      background: '#f5f8fa',
                      border: 'none',
                      padding: '14px 48px 14px 20px',
                      borderRadius: 8,
                      fontSize: 13,
                      outline: 'none',
                      boxSizing: 'border-box',
                    }}
                  />
                  <button
                    style={{
                      position: 'absolute',
                      right: 0,
                      top: 0,
                      bottom: 0,
                      width: 44,
                      background: C.grad,
                      border: 'none',
                      borderRadius: '0 8px 8px 0',
                      color: '#fff',
                      cursor: 'pointer',
                      fontSize: 14,
                    }}
                  >
                    🔍
                  </button>
                </div>
              </Widget>

              {/* Follow Us */}
              <Widget>
                <WidgetTitle>Follow Us</WidgetTitle>
                <div style={{ display: 'flex', justifyContent: 'center', gap: 8, flexWrap: 'wrap' }}>
                  {['𝕏', '𝓟', '𝐟', '📷', '🌐'].map((ic, i) => <SocialIcon key={i} icon={ic} />)}
                </div>
              </Widget>

              {/* Categories */}
              <Widget>
                <WidgetTitle>Categories</WidgetTitle>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                  {categories.map(([name, count]) => (
                    <li
                      key={name}
                      style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        padding: '10px 0',
                        borderBottom: '1px solid #e4e4e4',
                        fontSize: 14,
                      }}
                    >
                      <a
                        href="#"
                        style={{ color: C.text, textDecoration: 'none', transition: 'color .2s' }}
                        onMouseEnter={e => e.currentTarget.style.color = C.pink}
                        onMouseLeave={e => e.currentTarget.style.color = C.text}
                      >
                        {name}
                      </a>
                      <span style={{ color: C.pink, fontWeight: 600 }}>({count})</span>
                    </li>
                  ))}
                </ul>
              </Widget>

              {/* Recent Posts (Feeds) */}
              <Widget>
                <WidgetTitle>Feeds</WidgetTitle>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                  {recentPosts.map((post, i) => (
                    <li key={i} style={{ display: 'flex', gap: 12, marginBottom: 18, alignItems: 'flex-start' }}>
                      <div
                        style={{
                          flexShrink: 0,
                          width: 60,
                          height: 50,
                          borderRadius: 6,
                          background: 'linear-gradient(135deg,#f4f4fe,#e8e0f5)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          fontSize: 18,
                        }}
                      >
                        📰
                      </div>
                      <div>
                        <h6 style={{ margin: '0 0 4px', fontSize: 13, fontWeight: 600, color: C.primary, lineHeight: 1.4 }}>
                          <a href="#" style={{ color: 'inherit', textDecoration: 'none' }}>{post.title}</a>
                        </h6>
                        <span style={{ fontSize: 12, color: C.text }}>🕐 {post.time}</span>
                      </div>
                    </li>
                  ))}
                </ul>
              </Widget>

              {/* Tags */}
              <Widget>
                <WidgetTitle>Tags</WidgetTitle>
                <div>
                  {['Travel', 'Lifestyle', 'Photo', 'Adventures', 'Musician', 'Design', 'Branding', 'Creative'].map(t => (
                    <Tag key={t}>{t}</Tag>
                  ))}
                </div>
              </Widget>

            </aside>
          </div>
        </div>
      </section>
    </div>
  );
}

/* shared input style */
const inputStyle = {
  width: '100%',
  background: '#fff',
  border: 'none',
  borderRadius: 8,
  padding: '14px 20px',
  fontSize: 14,
  outline: 'none',
  boxSizing: 'border-box',
  boxShadow: '3px 4px 15px #0000001a',
  fontFamily: "'Poppins', sans-serif",
  resize: 'vertical',
};