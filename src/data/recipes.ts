import type { Recipe } from '../types';

export const RECIPES: Recipe[] = [
  // ===== 素菜 =====
  {
    id: 1,
    name: "番茄炒蛋",
    category: "veg",
    difficulty: "easy",
    time: 10,
    tags: ["快手菜", "孩子喜欢"],
    affection: { hug: 1, kiss: 0, shoulder: 0, handhold: 0, leg: 0 },
    ingredients: [
      { name: "番茄", amount: 2, unit: "个" },
      { name: "鸡蛋", amount: 3, unit: "个" },
      { name: "白糖", amount: 1, unit: "勺" },
      { name: "盐", amount: 0.5, unit: "勺" },
      { name: "葱花", amount: 1, unit: "把" }
    ],
    steps: [
      "番茄切块，鸡蛋打散备用",
      "热锅凉油，倒入蛋液炒至凝固盛出",
      "锅中留底油，下番茄炒出汁水",
      "加入白糖和盐调味",
      "倒入炒好的鸡蛋翻炒均匀",
      "撒上葱花出锅"
    ]
  },
  {
    id: 2,
    name: "蒜蓉西兰花",
    category: "veg",
    difficulty: "easy",
    time: 8,
    tags: ["健康低脂", "三分钟上桌"],
    affection: { hug: 1, kiss: 0, shoulder: 0, handhold: 1, leg: 0 },
    ingredients: [
      { name: "西兰花", amount: 300, unit: "g" },
      { name: "大蒜", amount: 5, unit: "瓣" },
      { name: "蚝油", amount: 1, unit: "勺" },
      { name: "盐", amount: 0.5, unit: "勺" },
      { name: "食用油", amount: 2, unit: "勺" }
    ],
    steps: [
      "西兰花掰小朵，盐水浸泡10分钟",
      "水烧开加少许盐和油，西兰花焯水1分钟捞出",
      "大蒜切末",
      "热锅凉油，小火将蒜末炒至金黄",
      "倒入西兰花，加蚝油和盐大火快炒30秒",
      "出锅装盘"
    ]
  },
  {
    id: 3,
    name: "酸辣土豆丝",
    category: "veg",
    difficulty: "easy",
    time: 8,
    tags: ["开胃下饭", "国民素菜"],
    affection: { hug: 1, kiss: 0, shoulder: 1, handhold: 0, leg: 0 },
    ingredients: [
      { name: "土豆", amount: 2, unit: "个" },
      { name: "干辣椒", amount: 5, unit: "个" },
      { name: "花椒", amount: 10, unit: "粒" },
      { name: "醋", amount: 2, unit: "勺" },
      { name: "盐", amount: 0.5, unit: "勺" },
      { name: "蒜末", amount: 1, unit: "勺" }
    ],
    steps: [
      "土豆切丝，用清水冲洗掉淀粉",
      "水烧开，土豆丝焯水30秒捞出沥干",
      "热锅凉油，小火炸香花椒捞出",
      "下干辣椒和蒜末炒香",
      "倒入土豆丝大火快炒",
      "沿锅边淋入醋，加盐翻炒均匀出锅"
    ]
  },
  {
    id: 4,
    name: "醋溜土豆丝",
    category: "veg",
    difficulty: "easy",
    time: 8,
    tags: ["酸爽可口", "下饭"],
    affection: { hug: 1, kiss: 0, shoulder: 0, handhold: 0, leg: 0 },
    ingredients: [
      { name: "土豆", amount: 2, unit: "个" },
      { name: "白醋", amount: 2, unit: "勺" },
      { name: "青椒", amount: 1, unit: "个" },
      { name: "盐", amount: 0.5, unit: "勺" },
      { name: "白糖", amount: 0.5, unit: "勺" },
      { name: "葱花", amount: 1, unit: "勺" }
    ],
    steps: [
      "土豆切丝，用清水冲洗掉淀粉后沥干",
      "青椒去籽切丝",
      "热锅凉油，下葱花爆香",
      "倒入土豆丝大火快炒1分钟",
      "加入青椒丝、盐、白糖翻炒均匀",
      "沿锅边淋入白醋，快速炒匀出锅"
    ]
  },
  {
    id: 5,
    name: "醋溜白菜",
    category: "veg",
    difficulty: "easy",
    time: 5,
    tags: ["冬日必备", "三分钟上桌"],
    affection: { hug: 1, kiss: 0, shoulder: 0, handhold: 1, leg: 0 },
    ingredients: [
      { name: "大白菜", amount: 300, unit: "g" },
      { name: "干辣椒", amount: 3, unit: "个" },
      { name: "醋", amount: 2, unit: "勺" },
      { name: "生抽", amount: 1, unit: "勺" },
      { name: "盐", amount: 0.5, unit: "勺" },
      { name: "蒜末", amount: 1, unit: "勺" }
    ],
    steps: [
      "白菜洗净切片，菜帮和菜叶分开",
      "热锅凉油，下干辣椒和蒜末爆香",
      "先下菜帮翻炒30秒",
      "再下菜叶一起炒软",
      "加生抽、盐调味",
      "沿锅边淋入醋，快速翻炒均匀出锅"
    ]
  },
  {
    id: 6,
    name: "干煸豆角",
    category: "veg",
    difficulty: "medium",
    time: 15,
    tags: ["麻辣鲜香", "下饭神器"],
    affection: { hug: 1, kiss: 0, shoulder: 1, handhold: 1, leg: 0 },
    ingredients: [
      { name: "四季豆", amount: 300, unit: "g" },
      { name: "牛肉末", amount: 50, unit: "g" },
      { name: "干辣椒", amount: 8, unit: "个" },
      { name: "花椒", amount: 1, unit: "勺" },
      { name: "生抽", amount: 1, unit: "勺" },
      { name: "盐", amount: 0.5, unit: "勺" }
    ],
    steps: [
      "四季豆掰段，沥干水分",
      "锅中多油，中小火将豆角煸至虎皮状捞出",
      "留底油，下牛肉末炒散",
      "加入干辣椒和花椒炒香",
      "倒入豆角，加生抽和盐调味",
      "大火翻炒均匀出锅"
    ]
  },
  {
    id: 7,
    name: "粉丝拌黄瓜",
    category: "cold",
    difficulty: "easy",
    time: 10,
    tags: ["清爽凉菜", "零油烟"],
    affection: { hug: 0, kiss: 0, shoulder: 0, handhold: 0, leg: 0 },
    ingredients: [
      { name: "粉丝", amount: 1, unit: "把" },
      { name: "黄瓜", amount: 1, unit: "根" },
      { name: "蒜末", amount: 2, unit: "勺" },
      { name: "生抽", amount: 2, unit: "勺" },
      { name: "醋", amount: 1, unit: "勺" },
      { name: "香油", amount: 1, unit: "勺" },
      { name: "辣椒油", amount: 1, unit: "勺" }
    ],
    steps: [
      "粉丝用温水泡软，剪短备用",
      "黄瓜拍碎切段",
      "碗中放蒜末、生抽、醋、香油、辣椒油调成料汁",
      "将粉丝和黄瓜放入大碗",
      "淋入料汁拌匀即可"
    ]
  },

  // ===== 荤菜（清真：牛羊鸡鱼虾） =====
  {
    id: 8,
    name: "可乐鸡翅",
    category: "meat",
    difficulty: "easy",
    time: 30,
    tags: ["零失败", "孩子超爱"],
    affection: { hug: 1, kiss: 1, shoulder: 0, handhold: 0, leg: 0 },
    ingredients: [
      { name: "鸡翅中", amount: 8, unit: "个" },
      { name: "可乐", amount: 1, unit: "罐" },
      { name: "生抽", amount: 2, unit: "勺" },
      { name: "老抽", amount: 0.5, unit: "勺" },
      { name: "姜片", amount: 3, unit: "片" },
      { name: "料酒", amount: 1, unit: "勺" }
    ],
    steps: [
      "鸡翅两面划刀，冷水下锅加姜片料酒焯水",
      "捞出沥干，锅中少油煎至两面金黄",
      "倒入可乐没过鸡翅",
      "加生抽、老抽调味",
      "中小火焖煮15分钟",
      "大火收汁至浓稠，注意别糊锅"
    ]
  },
  {
    id: 9,
    name: "清蒸鲈鱼",
    category: "meat",
    difficulty: "medium",
    time: 20,
    tags: ["鲜嫩少刺", "宴客首选"],
    affection: { hug: 2, kiss: 1, shoulder: 1, handhold: 0, leg: 1 },
    ingredients: [
      { name: "鲈鱼", amount: 1, unit: "条" },
      { name: "姜丝", amount: 2, unit: "勺" },
      { name: "葱丝", amount: 2, unit: "勺" },
      { name: "蒸鱼豉油", amount: 3, unit: "勺" },
      { name: "料酒", amount: 1, unit: "勺" },
      { name: "热油", amount: 2, unit: "勺" }
    ],
    steps: [
      "鲈鱼处理干净，两面划刀",
      "鱼身抹料酒，塞入姜片腌制10分钟",
      "水开后上锅蒸8-10分钟",
      "倒掉蒸出的水，铺上葱姜丝",
      "淋上蒸鱼豉油",
      "浇上滚烫的热油激发出香味"
    ]
  },
  {
    id: 10,
    name: "葱爆羊肉",
    category: "meat",
    difficulty: "medium",
    time: 15,
    tags: ["清真经典", "葱香浓郁"],
    affection: { hug: 1, kiss: 1, shoulder: 1, handhold: 0, leg: 0 },
    ingredients: [
      { name: "羊腿肉", amount: 250, unit: "g" },
      { name: "大葱", amount: 2, unit: "根" },
      { name: "生抽", amount: 2, unit: "勺" },
      { name: "料酒", amount: 1, unit: "勺" },
      { name: "白胡椒粉", amount: 0.5, unit: "勺" },
      { name: "盐", amount: 0.5, unit: "勺" },
      { name: "孜然粒", amount: 1, unit: "勺" }
    ],
    steps: [
      "羊腿肉切薄片，加料酒、生抽、白胡椒粉腌制15分钟",
      "大葱斜切大段",
      "热锅热油，大火下羊肉快速滑炒至变色盛出",
      "锅中留底油，下葱段爆香",
      "倒入羊肉，加盐和孜然粒",
      "大火翻炒均匀出锅"
    ]
  },
  {
    id: 11,
    name: "孜然羊肉",
    category: "meat",
    difficulty: "medium",
    time: 20,
    tags: ["烧烤风味", "西北风味"],
    affection: { hug: 2, kiss: 1, shoulder: 0, handhold: 0, leg: 0 },
    ingredients: [
      { name: "羊腿肉", amount: 300, unit: "g" },
      { name: "洋葱", amount: 0.5, unit: "个" },
      { name: "香菜", amount: 2, unit: "根" },
      { name: "孜然粉", amount: 2, unit: "勺" },
      { name: "辣椒粉", amount: 1, unit: "勺" },
      { name: "白芝麻", amount: 1, unit: "勺" },
      { name: "盐", amount: 0.5, unit: "勺" }
    ],
    steps: [
      "羊腿肉切丁，洋葱切丝，香菜切段",
      "羊肉丁加少量盐腌制10分钟",
      "热锅多油，中火将羊肉丁煎至表面微焦",
      "加入洋葱丝炒软",
      "撒孜然粉、辣椒粉翻炒均匀",
      "撒白芝麻和香菜段出锅"
    ]
  },
  {
    id: 12,
    name: "番茄牛腩",
    category: "meat",
    difficulty: "medium",
    time: 90,
    tags: ["软烂入味", "滋补暖身"],
    affection: { hug: 2, kiss: 1, shoulder: 1, handhold: 0, leg: 1 },
    ingredients: [
      { name: "牛腩", amount: 500, unit: "g" },
      { name: "番茄", amount: 3, unit: "个" },
      { name: "土豆", amount: 1, unit: "个" },
      { name: "姜片", amount: 4, unit: "片" },
      { name: "八角", amount: 2, unit: "个" },
      { name: "生抽", amount: 2, unit: "勺" },
      { name: "盐", amount: 1, unit: "勺" }
    ],
    steps: [
      "牛腩切块，冷水下锅焯水捞出",
      "番茄顶部划十字，开水烫后去皮切块",
      "土豆切滚刀块",
      "锅中少许油，炒软一半番茄出汁",
      "加入牛腩、姜片、八角翻炒均匀",
      "加开水没过食材，小火炖60分钟",
      "加入土豆和剩余番茄，继续炖20分钟",
      "加盐调味，大火收汁即可"
    ]
  },
  {
    id: 13,
    name: "大盘鸡",
    category: "meat",
    difficulty: "medium",
    time: 50,
    tags: ["西北名菜", "拌面一绝"],
    affection: { hug: 2, kiss: 1, shoulder: 1, handhold: 0, leg: 0 },
    ingredients: [
      { name: "鸡腿肉", amount: 500, unit: "g" },
      { name: "土豆", amount: 2, unit: "个" },
      { name: "青红椒", amount: 2, unit: "个" },
      { name: "洋葱", amount: 0.5, unit: "个" },
      { name: "干辣椒", amount: 5, unit: "个" },
      { name: "姜片", amount: 4, unit: "片" },
      { name: "生抽", amount: 2, unit: "勺" },
      { name: "老抽", amount: 1, unit: "勺" }
    ],
    steps: [
      "鸡腿肉切块，冷水下锅焯水捞出",
      "土豆切滚刀块，青红椒洋葱切块",
      "热锅凉油，下冰糖炒糖色",
      "倒入鸡肉翻炒上色",
      "加入干辣椒、姜片、生抽、老抽翻炒均匀",
      "加开水没过鸡肉，小火炖20分钟",
      "加入土豆继续炖15分钟",
      "加入青红椒和洋葱，大火收汁出锅"
    ]
  },
  {
    id: 14,
    name: "椒麻鸡",
    category: "meat",
    difficulty: "medium",
    time: 30,
    tags: ["麻辣鲜香", "新疆风味"],
    affection: { hug: 1, kiss: 1, shoulder: 1, handhold: 0, leg: 0 },
    ingredients: [
      { name: "鸡腿", amount: 2, unit: "个" },
      { name: "花椒", amount: 2, unit: "勺" },
      { name: "干辣椒", amount: 6, unit: "个" },
      { name: "葱段", amount: 3, unit: "勺" },
      { name: "生抽", amount: 2, unit: "勺" },
      { name: "盐", amount: 0.5, unit: "勺" },
      { name: "白糖", amount: 0.5, unit: "勺" }
    ],
    steps: [
      "鸡腿冷水下锅，加姜片料酒煮熟",
      "捞出过冰水，撕成鸡丝",
      "热锅多油，小火将花椒和干辣椒炸香",
      "加入葱段炸至微焦捞出",
      "碗中放生抽、盐、白糖，淋入椒麻油",
      "将料汁浇在鸡丝上拌匀",
      "撒炸香的葱段装饰"
    ]
  },
  {
    id: 15,
    name: "虾仁滑蛋",
    category: "meat",
    difficulty: "easy",
    time: 10,
    tags: ["嫩滑鲜美", "高蛋白"],
    affection: { hug: 1, kiss: 1, shoulder: 0, handhold: 0, leg: 0 },
    ingredients: [
      { name: "鲜虾仁", amount: 150, unit: "g" },
      { name: "鸡蛋", amount: 3, unit: "个" },
      { name: "牛奶", amount: 2, unit: "勺" },
      { name: "盐", amount: 0.5, unit: "勺" },
      { name: "白胡椒粉", amount: 0.25, unit: "勺" },
      { name: "葱花", amount: 1, unit: "勺" }
    ],
    steps: [
      "虾仁加盐、白胡椒粉腌制5分钟",
      "鸡蛋打散，加牛奶搅匀",
      "热锅少许油，虾仁煎至变色盛出",
      "倒入蛋液，趁未凝固时倒入虾仁",
      "用铲子轻轻推至蛋液半凝固",
      "撒葱花，关火用余温烘熟"
    ]
  },

  // ===== 汤羹 =====
  {
    id: 16,
    name: "西湖牛肉羹",
    category: "soup",
    difficulty: "medium",
    time: 25,
    tags: ["暖胃", "嫩滑鲜香"],
    affection: { hug: 1, kiss: 1, shoulder: 1, handhold: 0, leg: 0 },
    ingredients: [
      { name: "牛里脊", amount: 150, unit: "g" },
      { name: "蛋清", amount: 1, unit: "个" },
      { name: "香菜", amount: 2, unit: "根" },
      { name: "白胡椒粉", amount: 0.5, unit: "勺" },
      { name: "水淀粉", amount: 3, unit: "勺" },
      { name: "盐", amount: 0.5, unit: "勺" }
    ],
    steps: [
      "牛肉剁碎或用料理机打碎",
      "蛋清打散备用，香菜切末",
      "水烧开，下牛肉碎搅散",
      "撇去浮沫，加盐和白胡椒粉调味",
      "淋入水淀粉勾芡至浓稠",
      "关火后缓缓淋入蛋清搅成蛋花",
      "撒香菜末出锅"
    ]
  },

  // ===== 主食 =====
  {
    id: 17,
    name: "蛋炒饭",
    category: "staple",
    difficulty: "easy",
    time: 10,
    tags: ["剩米饭救星", "深夜食堂"],
    affection: { hug: 1, kiss: 0, shoulder: 0, handhold: 0, leg: 0 },
    ingredients: [
      { name: "隔夜米饭", amount: 2, unit: "碗" },
      { name: "鸡蛋", amount: 2, unit: "个" },
      { name: "胡萝卜丁", amount: 2, unit: "勺" },
      { name: "青豆", amount: 2, unit: "勺" },
      { name: "葱花", amount: 2, unit: "勺" },
      { name: "盐", amount: 0.5, unit: "勺" },
      { name: "生抽", amount: 1, unit: "勺" }
    ],
    steps: [
      "鸡蛋打散，胡萝卜丁青豆焯水备用",
      "热锅多油，倒入蛋液快速划散",
      "加入胡萝卜丁和青豆炒香",
      "倒入米饭，用铲子压散翻炒均匀",
      "加盐和生抽调味，大火快炒",
      "撒葱花出锅"
    ]
  },
  {
    id: 18,
    name: "葱油拌面",
    category: "staple",
    difficulty: "easy",
    time: 15,
    tags: ["懒人必备", "飘香十里"],
    affection: { hug: 1, kiss: 0, shoulder: 0, handhold: 1, leg: 0 },
    ingredients: [
      { name: "挂面", amount: 200, unit: "g" },
      { name: "小葱", amount: 1, unit: "把" },
      { name: "生抽", amount: 3, unit: "勺" },
      { name: "老抽", amount: 1, unit: "勺" },
      { name: "白糖", amount: 1, unit: "勺" },
      { name: "食用油", amount: 4, unit: "勺" }
    ],
    steps: [
      "小葱切段，葱白和葱绿分开",
      "生抽、老抽、白糖调成酱汁",
      "面条煮熟捞出过凉水沥干",
      "锅中倒油，小火将葱段炸至焦黄捞出",
      "倒入酱汁在葱油中煮沸",
      "面条装盘，淋上葱油酱汁拌匀",
      "撒炸香的葱段装饰"
    ]
  },

  // ===== 新增素菜 =====
  {
    id: 19,
    name: "麻婆豆腐",
    category: "veg",
    difficulty: "easy",
    time: 15,
    tags: ["下饭神器", "川菜经典"],
    affection: { hug: 1, kiss: 0, shoulder: 1, handhold: 0, leg: 0 },
    ingredients: [
      { name: "嫩豆腐", amount: 400, unit: "g" },
      { name: "豆瓣酱", amount: 1, unit: "勺" },
      { name: "花椒粉", amount: 0.5, unit: "勺" },
      { name: "蒜末", amount: 1, unit: "勺" },
      { name: "生抽", amount: 1, unit: "勺" },
      { name: "水淀粉", amount: 2, unit: "勺" },
      { name: "葱花", amount: 1, unit: "勺" }
    ],
    steps: [
      "嫩豆腐切2cm方块，淡盐水浸泡5分钟",
      "热锅凉油，下豆瓣酱和蒜末炒出红油",
      "加半碗水烧开，倒入豆腐",
      "加生抽调味，中火煮3分钟",
      "淋入水淀粉勾芡",
      "撒花椒粉和葱花出锅"
    ]
  },
  {
    id: 20,
    name: "地三鲜",
    category: "veg",
    difficulty: "medium",
    time: 20,
    tags: ["东北名菜", "比肉还香"],
    affection: { hug: 1, kiss: 1, shoulder: 0, handhold: 0, leg: 0 },
    ingredients: [
      { name: "土豆", amount: 1, unit: "个" },
      { name: "茄子", amount: 1, unit: "根" },
      { name: "青椒", amount: 1, unit: "个" },
      { name: "蒜末", amount: 2, unit: "勺" },
      { name: "生抽", amount: 2, unit: "勺" },
      { name: "蚝油", amount: 1, unit: "勺" },
      { name: "白糖", amount: 0.5, unit: "勺" }
    ],
    steps: [
      "土豆、茄子切滚刀块，青椒切块",
      "土豆和茄子分别过油炸至金黄捞出",
      "留底油，下蒜末炒香",
      "倒入土豆、茄子、青椒翻炒均匀",
      "加生抽、蚝油、白糖调味",
      "大火翻炒均匀出锅"
    ]
  },
  {
    id: 21,
    name: "蚝油生菜",
    category: "veg",
    difficulty: "easy",
    time: 5,
    tags: ["脆嫩爽口", "零失败"],
    affection: { hug: 1, kiss: 0, shoulder: 0, handhold: 0, leg: 0 },
    ingredients: [
      { name: "生菜", amount: 300, unit: "g" },
      { name: "蚝油", amount: 1.5, unit: "勺" },
      { name: "生抽", amount: 1, unit: "勺" },
      { name: "蒜末", amount: 2, unit: "勺" },
      { name: "食用油", amount: 2, unit: "勺" }
    ],
    steps: [
      "生菜掰开洗净",
      "水烧开加少许盐，生菜焯水10秒捞出摆盘",
      "碗中放蚝油、生抽、2勺清水调匀",
      "热锅凉油，小火将蒜末炒至金黄",
      "倒入料汁煮沸",
      "将酱汁淋在生菜上即可"
    ]
  },

  // ===== 新增凉菜 =====
  {
    id: 22,
    name: "拍黄瓜",
    category: "cold",
    difficulty: "easy",
    time: 5,
    tags: ["下酒神器", "五分钟搞定"],
    affection: { hug: 0, kiss: 0, shoulder: 0, handhold: 0, leg: 0 },
    ingredients: [
      { name: "黄瓜", amount: 2, unit: "根" },
      { name: "蒜末", amount: 2, unit: "勺" },
      { name: "生抽", amount: 2, unit: "勺" },
      { name: "醋", amount: 1, unit: "勺" },
      { name: "香油", amount: 1, unit: "勺" },
      { name: "辣椒油", amount: 1, unit: "勺" },
      { name: "花生米", amount: 2, unit: "勺" }
    ],
    steps: [
      "黄瓜用刀拍裂后切段",
      "加一勺盐腌5分钟，倒掉多余水分",
      "放入碗中，加蒜末、生抽、醋、香油、辣椒油",
      "撒花生米",
      "拌匀即可上桌"
    ]
  },
  {
    id: 23,
    name: "凉拌木耳",
    category: "cold",
    difficulty: "easy",
    time: 10,
    tags: ["清爽解腻", "肠道清道夫"],
    affection: { hug: 0, kiss: 0, shoulder: 0, handhold: 1, leg: 0 },
    ingredients: [
      { name: "干木耳", amount: 20, unit: "g" },
      { name: "洋葱", amount: 0.25, unit: "个" },
      { name: "香菜", amount: 2, unit: "根" },
      { name: "蒜末", amount: 2, unit: "勺" },
      { name: "生抽", amount: 2, unit: "勺" },
      { name: "醋", amount: 1, unit: "勺" },
      { name: "香油", amount: 1, unit: "勺" },
      { name: "辣椒油", amount: 1, unit: "勺" }
    ],
    steps: [
      "干木耳温水泡发1小时，洗净撕小朵",
      "水烧开，木耳焯水2分钟捞出过凉水",
      "洋葱切丝，香菜切段",
      "所有食材放入大碗",
      "加蒜末、生抽、醋、香油、辣椒油",
      "拌匀静置10分钟更入味"
    ]
  },
  {
    id: 24,
    name: "凉拌鸡丝",
    category: "cold",
    difficulty: "easy",
    time: 20,
    tags: ["高蛋白", "减脂友好"],
    affection: { hug: 1, kiss: 0, shoulder: 0, handhold: 0, leg: 0 },
    ingredients: [
      { name: "鸡胸肉", amount: 200, unit: "g" },
      { name: "黄瓜", amount: 0.5, unit: "根" },
      { name: "胡萝卜", amount: 0.5, unit: "根" },
      { name: "蒜末", amount: 2, unit: "勺" },
      { name: "生抽", amount: 2, unit: "勺" },
      { name: "醋", amount: 1, unit: "勺" },
      { name: "香油", amount: 1, unit: "勺" },
      { name: "白芝麻", amount: 1, unit: "勺" }
    ],
    steps: [
      "鸡胸肉冷水下锅，加姜片料酒煮熟",
      "捞出过凉水，撕成细丝",
      "黄瓜和胡萝卜切丝",
      "碗中放蒜末、生抽、醋、香油调成料汁",
      "将鸡丝、黄瓜丝、胡萝卜丝放入大碗",
      "淋入料汁拌匀，撒白芝麻"
    ]
  },

  // ===== 新增荤菜 =====
  {
    id: 25,
    name: "黑椒牛柳",
    category: "meat",
    difficulty: "medium",
    time: 20,
    tags: ["西餐厅同款", "嫩滑入味"],
    affection: { hug: 1, kiss: 1, shoulder: 1, handhold: 0, leg: 0 },
    ingredients: [
      { name: "牛里脊", amount: 250, unit: "g" },
      { name: "青椒", amount: 1, unit: "个" },
      { name: "洋葱", amount: 0.5, unit: "个" },
      { name: "黑胡椒酱", amount: 2, unit: "勺" },
      { name: "生抽", amount: 1, unit: "勺" },
      { name: "料酒", amount: 1, unit: "勺" },
      { name: "淀粉", amount: 1, unit: "勺" }
    ],
    steps: [
      "牛里脊切粗条，加生抽、料酒、淀粉抓匀腌15分钟",
      "青椒洋葱切粗丝",
      "热锅热油，大火将牛柳滑炒至变色盛出",
      "留底油，下洋葱和青椒炒软",
      "倒入牛柳，加黑胡椒酱",
      "大火翻炒均匀出锅"
    ]
  },
  {
    id: 26,
    name: "黄焖鸡",
    category: "meat",
    difficulty: "medium",
    time: 40,
    tags: ["外卖爆款", "米饭杀手"],
    affection: { hug: 2, kiss: 1, shoulder: 0, handhold: 0, leg: 0 },
    ingredients: [
      { name: "鸡腿肉", amount: 400, unit: "g" },
      { name: "土豆", amount: 1, unit: "个" },
      { name: "香菇", amount: 5, unit: "朵" },
      { name: "青椒", amount: 1, unit: "个" },
      { name: "姜片", amount: 3, unit: "片" },
      { name: "生抽", amount: 2, unit: "勺" },
      { name: "老抽", amount: 0.5, unit: "勺" },
      { name: "蚝油", amount: 1, unit: "勺" }
    ],
    steps: [
      "鸡腿肉切块，冷水下锅焯水捞出",
      "香菇泡发切片，土豆青椒切块",
      "热锅凉油，下冰糖炒糖色",
      "倒入鸡肉翻炒上色",
      "加姜片、生抽、老抽、蚝油翻炒均匀",
      "倒入泡香菇的水和清水没过鸡肉",
      "小火焖煮20分钟",
      "加入土豆和香菇继续焖10分钟",
      "加入青椒，大火收汁即可"
    ]
  },
  {
    id: 27,
    name: "香煎带鱼",
    category: "meat",
    difficulty: "medium",
    time: 20,
    tags: ["外酥里嫩", "海边味道"],
    affection: { hug: 1, kiss: 1, shoulder: 0, handhold: 1, leg: 0 },
    ingredients: [
      { name: "带鱼段", amount: 300, unit: "g" },
      { name: "姜片", amount: 4, unit: "片" },
      { name: "料酒", amount: 1, unit: "勺" },
      { name: "盐", amount: 0.5, unit: "勺" },
      { name: "白胡椒粉", amount: 0.5, unit: "勺" },
      { name: "淀粉", amount: 3, unit: "勺" }
    ],
    steps: [
      "带鱼段洗净，加姜片、料酒、盐腌15分钟",
      "用厨房纸吸干表面水分",
      "两面均匀拍上薄淀粉",
      "热锅多油，中火将带鱼煎至两面金黄",
      "撒白胡椒粉出锅"
    ]
  },

  // ===== 新增汤羹 =====
  {
    id: 28,
    name: "紫菜蛋花汤",
    category: "soup",
    difficulty: "easy",
    time: 5,
    tags: ["一分钟上桌", "懒人必会"],
    affection: { hug: 0, kiss: 0, shoulder: 0, handhold: 0, leg: 0 },
    ingredients: [
      { name: "紫菜", amount: 5, unit: "g" },
      { name: "鸡蛋", amount: 1, unit: "个" },
      { name: "虾皮", amount: 1, unit: "勺" },
      { name: "葱花", amount: 1, unit: "勺" },
      { name: "盐", amount: 0.5, unit: "勺" },
      { name: "香油", amount: 0.5, unit: "勺" }
    ],
    steps: [
      "锅中加2碗水烧开",
      "放入紫菜和虾皮煮1分钟",
      "加盐调味",
      "关火后缓缓淋入蛋液搅成蛋花",
      "撒葱花，滴香油出锅"
    ]
  },

  // ===== 新增主食 =====
  {
    id: 29,
    name: "西红柿鸡蛋面",
    category: "staple",
    difficulty: "easy",
    time: 15,
    tags: ["家的味道", "十分钟搞定"],
    affection: { hug: 1, kiss: 0, shoulder: 0, handhold: 0, leg: 0 },
    ingredients: [
      { name: "挂面", amount: 200, unit: "g" },
      { name: "番茄", amount: 2, unit: "个" },
      { name: "鸡蛋", amount: 2, unit: "个" },
      { name: "生抽", amount: 1, unit: "勺" },
      { name: "盐", amount: 0.5, unit: "勺" },
      { name: "白糖", amount: 0.5, unit: "勺" },
      { name: "葱花", amount: 1, unit: "勺" }
    ],
    steps: [
      "番茄切块，鸡蛋打散",
      "热锅凉油，倒入蛋液炒熟盛出",
      "锅中留底油，下番茄炒出汁",
      "加生抽、盐、白糖调味",
      "倒入炒好的鸡蛋，加水煮开",
      "另起锅煮面条至熟",
      "面条捞出，浇上番茄鸡蛋卤，撒葱花"
    ]
  }
];

export const CATEGORIES: Record<string, string> = {
  all: '全部',
  meat: '荤菜',
  veg: '素菜',
  cold: '凉菜',
  soup: '汤羹',
  staple: '主食'
};

export const DIFFICULTY_LABELS: Record<string, { text: string; color: string }> = {
  easy: { text: '简单', color: 'bg-green-100 text-green-700' },
  medium: { text: '中等', color: 'bg-orange-100 text-orange-700' },
  hard: { text: '困难', color: 'bg-red-100 text-red-700' }
};

export const AFFECTION_LABELS: Record<string, { icon: string; name: string }> = {
  hug: { icon: '🤗', name: '抱抱' },
  kiss: { icon: '😘', name: '亲亲' },
  handhold: { icon: '🤝', name: '牵手' },
  shoulder: { icon: '💆', name: '捏肩' },
  leg: { icon: '🦶', name: '捶腿' }
};

export function getDishEmoji(category: string): string {
  const emojis: Record<string, string> = { meat: '🥩', veg: '🥬', cold: '🥗', soup: '🍲', staple: '🍚' };
  return emojis[category] || '🍽️';
}
