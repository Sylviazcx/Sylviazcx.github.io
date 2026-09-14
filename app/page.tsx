const strengths = [
  { number: "01", title: "把复杂业务理清楚", description: "把散落多处的流程、数据和非标做法收拢起来，再用流程图或页面表达成一套清爽的流程或系统。" },
  { number: "02", title: "听懂不同角色的语言", description: "敏锐识别同一个词背后的不同意思，通过反复提问和澄清，确认大家真正想表达的是什么。" },
  { number: "03", title: "找到 AI 介入点", description: "从现有工作流程出发，判断哪些环节适合 AI，哪些环节仍然需要人的经验和判断。" },
  { number: "04", title: "做得贴近业务、容易上手", description: "先看真实的工作怎么做、卡在哪里，再设计贴近业务实际、让人容易上手的方案。" },
];

const proofPoints = [
  "四年本地生活大厂经验，覆盖商家经营、商家端、骑手端和客服端",
  "在骑手端工作两年多，参与优化 12 条核心作业链路；也曾体验送外卖、走访骑手和城市经理",
  "在客服端工作接近一年，参与客服工作台、机器人转人工，以及真人客服与 AI 协作方式的产品规划",
  "入职前主动到个体外卖店和连锁加盟店打工，了解真实经营流程",
  "在 AIESEC 管理国内 28 个分部的 900 多名成员，主导工作流改革和数字化升级，最终总业绩排名 2 / 98",
];

const process = ["进入现场", "看清流程", "找到核心", "共同改造"];

export default function Home() {
  return (
    <main>
      <header className="site-header page-shell">
        <a className="wordmark" href="#top" aria-label="回到首页">郑常心 <small>Sylvia</small><span>.</span></a>
        <nav aria-label="页面导航">
          <a href="#about">关于我</a><a href="#proof">经历</a><a className="nav-contact" href="#contact">联系我</a>
        </nav>
      </header>

      <section className="hero page-shell" id="top">
        <div className="eyebrow"><span className="status-dot" /> 企业 AI 转型实践者 × 业务型设计师</div>
        <h1>把复杂业务，<br />梳理成 <em>AI 工作流</em></h1>
        <p className="hero-copy">Hi！我是郑常心 Sylvia，擅长从真实场景出发，帮你看清业务流程，找到适合 AI 介入的环节。</p>
        <div className="hero-actions">
          <a className="primary-button" href="#proof">看看我做过什么 <span aria-hidden="true">↓</span></a>
          <a className="text-link" href="#contact">和我聊聊 <span aria-hidden="true">↗</span></a>
        </div>
        <div className="process-card" aria-label="工作方法">
          <div className="process-card-label">HOW I WORK</div>
          <div className="process-line">
            {process.map((item, index) => (
              <div className="process-step" key={item}>
                <span>{String(index + 1).padStart(2, "0")}</span><strong>{item}</strong>
                {index < process.length - 1 && <i aria-hidden="true">→</i>}
              </div>
            ))}
          </div>
          <p className="hand-note">先看懂，再动手。</p>
        </div>
      </section>

      <section className="section page-shell" id="about">
        <div className="section-index">01 / 我是谁</div>
        <div className="about-grid">
          <h2>11 年，<br />和人一起解题。</h2>
          <div className="about-copy">
            <p>我喜欢复杂的 B 端业务和系统，也坚持走进真实场景，理解用户怎么工作、业务怎么运转。</p>
            <p>我对不同的业务和组织形态始终好奇。和不同岗位、不同背景的人一起工作时，我会尊重人的习惯和处境，先理解他们真正想实现的目标，再一起把路径梳理清楚。</p>
            <p>现在，我正在把这套理解业务、理解人、推动协作的能力用于企业 AI 工作流实践。</p>
          </div>
        </div>
        <div className="about-credentials" aria-label="个人背景">
          <article>
            <span>01 / 教育背景</span>
            <strong>皇家艺术学院 × 中山大学</strong>
            <p>全球第一的皇家艺术学院服务设计硕士，本科就读于 985 中山大学。</p>
          </article>
          <article>
            <span>02 / 业务背景</span>
            <strong>四年大厂本地生活经验</strong>
            <p>经历客如云、饿了么商家端、骑手端和客服端，覆盖外卖链路的多个视角。</p>
          </article>
          <article>
            <span>03 / 组织经验</span>
            <strong>四种组织视角</strong>
            <p>经验横跨大厂、创业公司、国际组织和公益组织。</p>
          </article>
          <article>
            <span>04 / 变革经历</span>
            <strong>28 个分部 · 900 多名成员</strong>
            <p>在 AIESEC 主导业务工作流改革和数字化升级，最终总业绩排名 2 / 98。</p>
          </article>
        </div>
      </section>

      <section className="section page-shell" id="value">
        <div className="section-index">02 / 我能给你什么</div>
        <h2 className="section-title">从一团乱麻，<br />到一条清楚的路径。</h2>
        <div className="strength-list">
          {strengths.map((item) => (
            <article className="strength-item" key={item.number}>
              <span>{item.number}</span><h3>{item.title}</h3><p>{item.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section proof-section" id="proof">
        <div className="page-shell">
          <div className="section-index light">03 / 凭什么信我</div>
          <div className="proof-heading">
            <h2>我确实在业务现场里，<br />做过这些事。</h2>
            <p>不是一份完整作品集，先让你快速了解我的业务覆盖和能力范围。</p>
          </div>
          <ul className="proof-list">
            {proofPoints.map((item, index) => (
              <li key={item}><span>{String(index + 1).padStart(2, "0")}</span><p>{item}</p><i aria-hidden="true">↗</i></li>
            ))}
          </ul>
          <div className="proof-footnotes">
            <div><strong>方法从哪里来</strong><p>皇家艺术学院服务设计硕士。重视找准核心问题，并用可视化推动团队形成共识。</p></div>
            <div><strong>我还做过什么</strong><p>多次参与社会创新共创项目，与老人、社工、专家和项目团队共同开展工作坊。</p></div>
          </div>
        </div>
      </section>

      <section className="section page-shell" id="style">
        <div className="section-index">04 / 我的做事方式</div>
        <div className="style-stack">
          <article><span>01</span><h3>走进去</h3><p>去门店打工、体验送外卖、走访骑手和客服职场。真实工作是什么样，先亲眼看看。</p></article>
          <article><span>02</span><h3>画出来</h3><p>把用户习惯、操作路径和协作关系变成一张能讨论的图，让复杂问题有共同语言。</p></article>
          <article><span>03</span><h3>推回去</h3><p>发现上游方案不合理，就用方案和 Demo 重新共创；同时考虑技术限制和实现成本。</p></article>
        </div>
      </section>

      <section className="contact-section" id="contact">
        <div className="page-shell contact-grid">
          <div>
            <div className="section-index light">05 / 联系我</div>
            <h2>有一段复杂业务，<br />想先把它理清楚？</h2>
            <p>如果你正在考虑怎么把 AI 用进真实业务，可以加我微信，聊聊你现在最想梳理的一段工作流程。</p>
          </div>
          <div className="wechat-card">
            <img className="wechat-qr" src="./wechat-qr.jpg" alt="郑常心 Sylvia 的微信二维码" />
            <p>扫一扫，加我微信</p>
          </div>
        </div>
      </section>

      <footer className="site-footer"><div className="page-shell"><span>郑常心 SYLVIA</span><span>PERSONAL SITE · 2026</span></div></footer>
    </main>
  );
}
