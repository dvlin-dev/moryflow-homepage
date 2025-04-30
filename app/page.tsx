import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Badge } from "@/components/ui/badge";
import { Brain, Heart, Shield, Zap, MessageSquare, Mic, Globe, Cpu } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-background to-muted">
      {/* 导航栏 */}
      <header className="container mx-auto py-4 px-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 flex items-center justify-center">
            <Image
              src="/logo.svg"
              alt="Moryflow Logo"
              width={40}
              height={40}
              priority
            />
          </div>
          <h1 className="text-2xl font-bold">Moryflow</h1>
        </div>
        <Button variant="outline">开始使用</Button>
      </header>

      {/* 英雄区 */}
      <section className="container mx-auto px-4 py-16 md:py-24 flex flex-col items-center text-center">
        <Badge className="mb-4" variant="outline">全新 AI 体验</Badge>
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
          <span className="text-primary">Moryflow</span>：你的贴心 AI 伴侣
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-8">
          不仅仅是一个 AI 伴侣，更是懂你的伙伴，陪伴你每一天，助力你活出更好的自己。
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Button size="lg" className="gap-2">
            <MessageSquare className="h-5 w-5" />
            立即体验
          </Button>
          {/* <Button size="lg" variant="outline" className="gap-2">
            了解更多
          </Button> */}
        </div>
      </section>

      {/* 特性展示 */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">为何选择 Moryflow</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Moryflow 集成了前沿 AI 技术，提供个性化体验，成为你生活中不可或缺的一部分
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <FeatureCard 
            icon={<Brain className="h-8 w-8 text-primary" />}
            title="长久记忆"
            description="无论是 1 年前的对话，还是日常笔记、健康信息，Moryflow 都能长久记忆，比你更了解你。"
          />
          <FeatureCard 
            icon={<Heart className="h-8 w-8 text-primary" />}
            title="关心你的健康"
            description="接入 Apple Health，根据你的数据提供个性化建议，守护你的每一步。"
          />
          <FeatureCard 
            icon={<Zap className="h-8 w-8 text-primary" />}
            title="智能无限可能"
            description="支持联网搜索、AI 生图，激发创意，满足你的各种需求。"
          />
          <FeatureCard 
            icon={<Shield className="h-8 w-8 text-primary" />}
            title="隐私至上"
            description="所有对话和重要信息全程加密存储，安全无忧。"
          />
          <FeatureCard 
            icon={<Cpu className="h-8 w-8 text-primary" />}
            title="灵活选择"
            description="提供本地大模型和云端大模型，本地模式完全离线，隐私无忧；云端模式更智能，随你所需。"
          />
          <FeatureCard 
            icon={<Mic className="h-8 w-8 text-primary" />}
            title="灵感随手记"
            description="通过 action button 和语音识别，随时随地捕捉你的灵感，不错过每一个精彩瞬间。"
          />
        </div>
      </section>

      {/* 体验展示 */}
      <section className="container mx-auto px-4 py-16 bg-muted/50 rounded-3xl my-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">与你同行，温暖而强大</h2>
            <p className="text-muted-foreground mb-6">
              Moryflow 通过自然对话，帮你回顾过去，规划未来，成为你忠实的智能伙伴。
            </p>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="mt-1 rounded-full bg-primary/10 p-1">
                  <Globe className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold">智能联网</h3>
                  <p className="text-sm text-muted-foreground">实时获取信息，保持你的知识更新</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="mt-1 rounded-full bg-primary/10 p-1">
                  <MessageSquare className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold">深度对话</h3>
                  <p className="text-sm text-muted-foreground">理解上下文，提供个性化回应</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="mt-1 rounded-full bg-primary/10 p-1">
                  <Shield className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold">隐私保护</h3>
                  <p className="text-sm text-muted-foreground">数据加密，安全无忧</p>
                </div>
              </li>
            </ul>
          </div>
          <div className="rounded-xl overflow-hidden shadow-xl">
            <AspectRatio ratio={9/16} className="bg-gradient-to-br from-primary/20 to-primary/5 rounded-xl">
              <div className="flex h-full w-full items-center justify-center">
                <div className="w-3/4 bg-background rounded-xl p-4 shadow-lg">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-8 h-8 flex items-center justify-center">
                      <Image
                        src="/logo.svg"
                        alt="Moryflow Logo"
                        width={28}
                        height={28}
                      />
                    </div>
                    <p className="font-medium">Moryflow</p>
                  </div>
                  <p className="text-sm">早上好！根据你的健康数据，昨晚你的睡眠质量不错。今天有3个日程安排，需要我帮你复习昨天的笔记吗？</p>
                </div>
              </div>
            </AspectRatio>
          </div>
        </div>
      </section>

      {/* CTA区域 */}
      <section className="container mx-auto px-4 py-16 md:py-24 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">准备好体验 Moryflow 了吗？</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
          加入我们，开启AI伴侣的全新体验，让Moryflow成为你生活的一部分。
        </p>
        <Button size="lg" className="gap-2">
          立即开始
        </Button>
      </section>

      {/* 页脚 */}
      <footer className="bg-muted/30 py-12 mt-auto">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center gap-2 mb-4 md:mb-0">
              <div className="w-8 h-8 flex items-center justify-center">
                <Image
                  src="/logo.svg"
                  alt="Moryflow Logo"
                  width={28}
                  height={28}
                />
              </div>
              <span className="font-bold">Moryflow</span>
            </div>
            <div className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Moryflow. 保留所有权利。
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

function FeatureCard({ 
  icon, 
  title, 
  description 
}: { 
  icon: React.ReactNode; 
  title: string; 
  description: string; 
}) {
  return (
    <Card className="h-full transition-all hover:shadow-md">
      <CardHeader>
        <div className="mb-4">{icon}</div>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-base">{description}</CardDescription>
      </CardContent>
    </Card>
  );
}
