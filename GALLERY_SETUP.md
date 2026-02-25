# Gallery 数据配置指南

## 📸 如何添加您的志愿者和竞赛经历

### 1️⃣ 准备图片

#### 图片要求：
- **格式**: JPG, PNG, WebP
- **建议尺寸**: 宽度 800-1200px
- **长宽比**: 4:3 或 16:9 效果最佳
- **文件大小**: 建议每张图片 < 500KB（优化加载速度）

#### 存放位置：
将图片放在项目的 `public/images/gallery/` 文件夹中

```bash
# 创建文件夹
mkdir -p public/images/gallery/volunteer
mkdir -p public/images/gallery/competition
```

---

### 2️⃣ 编辑 Gallery 数据

打开文件：`/src/app/components/Gallery.tsx`

找到 `galleryItems` 数组（大约在第 17 行），替换为您的真实经历：

```typescript
const galleryItems: GalleryItem[] = [
  // 志愿者经历示例
  {
    id: 1,
    title: '社区编程教学',                    // 经历标题
    category: 'volunteer',                    // 分类：volunteer 或 competition
    image: '/images/gallery/volunteer/1.jpg', // 图片路径
    description: '为社区儿童教授基础编程知识',  // 简短描述
    date: '2024年1月',                        // 日期
    organization: 'Sydney Community Center'   // 组织名称
  },
  
  // 竞赛经历示例
  {
    id: 2,
    title: 'UNSW Hackathon 一等奖',
    category: 'competition',
    image: '/images/gallery/competition/1.jpg',
    description: '24小时黑客马拉松冠军，开发智能物流管理系统',
    date: '2024年3月',
    organization: 'UNSW CSESoc'
  },
  
  // 继续添加更多经历...
];
```

---

### 3️⃣ 数据字段说明

| 字段 | 类型 | 必填 | 说明 |
|------|------|------|------|
| `id` | number | ✅ | 唯一标识符，从 1 开始递增 |
| `title` | string | ✅ | 经历的标题 |
| `category` | 'volunteer' \| 'competition' | ✅ | 分类：志愿者或竞赛 |
| `image` | string | ✅ | 图片路径（相对于 public 文件夹） |
| `description` | string | ✅ | 简短描述（1-2句话） |
| `date` | string | ⭕ | 日期（格式自由） |
| `organization` | string | ⭕ | 组织或活动名称 |

---

### 4️⃣ 图片优化建议

#### 使用在线工具压缩图片：
- [TinyPNG](https://tinypng.com/) - PNG/JPG 压缩
- [Squoosh](https://squoosh.app/) - 多格式压缩
- [ImageOptim](https://imageoptim.com/) - Mac 本地工具

#### 或使用命令行工具：
```bash
# 安装 sharp-cli
pnpm add -g sharp-cli

# 批量压缩并转换为 WebP
sharp -i "public/images/gallery/**/*.{jpg,png}" -o "public/images/gallery/" -f webp --quality 80
```

---

### 5️⃣ 完整示例

```typescript
const galleryItems: GalleryItem[] = [
  {
    id: 1,
    title: 'Food Bank Volunteer',
    category: 'volunteer',
    image: '/images/gallery/volunteer/foodbank.jpg',
    description: 'Organized food distribution for 200+ families during community outreach program',
    date: 'Jan 2024',
    organization: 'Sydney Food Bank'
  },
  {
    id: 2,
    title: 'Beach Cleanup Initiative',
    category: 'volunteer',
    image: '/images/gallery/volunteer/beach-cleanup.jpg',
    description: 'Led team of 50 volunteers to clean Bondi Beach, collected 500kg of waste',
    date: 'Feb 2024',
    organization: 'Clean Ocean Australia'
  },
  {
    id: 3,
    title: 'UNSW Hackathon 2024',
    category: 'competition',
    image: '/images/gallery/competition/hackathon.jpg',
    description: 'First place winner - Built AI-powered study planner in 24 hours',
    date: 'Mar 2024',
    organization: 'UNSW CSESoc'
  },
  {
    id: 4,
    title: 'Coding Competition Regional Finals',
    category: 'competition',
    image: '/images/gallery/competition/coding-contest.jpg',
    description: 'Top 5 finish among 500+ participants in algorithmic problem solving',
    date: 'Dec 2023',
    organization: 'Tech Challenge Australia'
  },
  {
    id: 5,
    title: 'Teaching Kids to Code',
    category: 'volunteer',
    image: '/images/gallery/volunteer/kids-coding.jpg',
    description: 'Taught Python basics to 30 primary school students over 8 weeks',
    date: 'Nov 2023',
    organization: 'Code Club Sydney'
  },
  {
    id: 6,
    title: 'Web Design Excellence Award',
    category: 'competition',
    image: '/images/gallery/competition/web-design.jpg',
    description: 'Best UX/UI design award for innovative e-commerce platform redesign',
    date: 'Oct 2023',
    organization: 'Design Awards 2023'
  }
];
```

---

### 6️⃣ 使用 Unsplash 作为占位图

在收集真实图片之前，可以使用 Unsplash 的占位图：

```typescript
// 志愿者活动
image: 'https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=800'  // 社区服务
image: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=800'  // 团队合作
image: 'https://images.unsplash.com/photo-1618477461853-cf6ed80faba5?w=800'  // 环保活动

// 竞赛活动
image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800'  // 编程
image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800'  // 代码
image: 'https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?w=800'  // 设计
```

---

### 7️⃣ 测试

1. 保存文件
2. 运行 `pnpm dev`
3. 切换到 Gallery 页面
4. 测试筛选功能
5. 点击卡片测试灯箱效果

---

## 💡 小技巧

### 最佳实践：
- ✅ 保持图片质量一致
- ✅ 描述简洁有力（突出成就和影响）
- ✅ 混合志愿者和竞赛经历（展示多样性）
- ✅ 按时间倒序排列（最新的在前面）

### 图片拍摄建议：
- 📸 志愿者活动：团队合影、活动现场、服务对象
- 🏆 竞赛经历：领奖照片、团队照、项目展示
- 📱 保持统一的拍摄风格和色调

---

## ❓ 常见问题

**Q: 可以添加视频吗？**
A: 目前只支持图片。如需视频，可以使用视频封面图，点击后跳转到 YouTube 等平台。

**Q: 图片加载太慢怎么办？**
A: 使用图片压缩工具，或者使用 WebP 格式。建议每张图片 < 500KB。

**Q: 可以改变布局吗？**
A: 可以！在 Gallery.tsx 中修改 `grid-cols` 类名来调整列数。

**Q: 如何调整卡片高度？**
A: 修改第 106 行的 `row-span` 值，或改变图片的 `aspect-ratio`。
