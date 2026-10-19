// ============================================================
// 百乐测评 · 配置文件（整个部署过程只需要改这一个文件）
//
// 填法（两个值都在 Supabase 后台取）：
//   1. 登录 supabase.com → 你的项目 → 左下角 Project Settings → API
//   2. Project URL          → 复制，粘贴到下面 url 的引号里
//   3. anon public API key  → 复制，粘贴到下面 anon 的引号里
//
// 注意：
//   - 只填 anon key，永远不要填 service_role key（那个是管理员密钥）
//   - 不要删掉最上面一行 window.BL_CONFIG，只改引号里的内容
//   - 改完保存，然后重新上传到 GitHub
// ============================================================

window.BL_CONFIG = {
  url:  'https://vrjbzgdyenetmvprusvx.supabase.co/rest/v1',
  anon: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZyamJ6Z2R5ZW5ldG12cHJ1c3Z4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTIzNzAzNzEsImV4cCI6MjEwNzk0NjM3MX0.96KPgUQXA5WI_uuTOn4XliFNJ4KFG7p9IxdydGayNpg'
};
