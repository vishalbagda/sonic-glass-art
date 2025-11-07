import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MessageCircle, Send } from "lucide-react";
import { soundManager } from "@/utils/soundManager";
import { toast } from "sonner";

export const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    soundManager.playClick();
    toast.success("Message sent successfully!");
  };

  return (
    <section id="contact" className="py-20 bg-muted/20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-4">Contact Me</h2>
          <p className="text-muted-foreground text-lg">Get in touch</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="text-3xl font-bold mb-8">Talk to me</h3>
            
            <div className="glass glass-hover p-6 rounded-2xl text-center space-y-3 transition-all">
              <Mail className="w-10 h-10 mx-auto text-primary" />
              <h4 className="font-semibold text-lg">Email</h4>
              <p className="text-sm text-muted-foreground">user@gmail.com</p>
              <Button
                onClick={() => soundManager.playClick()}
                variant="ghost"
                className="text-primary"
              >
                Write me →
              </Button>
            </div>

            <div className="glass glass-hover p-6 rounded-2xl text-center space-y-3 transition-all">
              <MessageCircle className="w-10 h-10 mx-auto text-primary" />
              <h4 className="font-semibold text-lg">Whatsapp</h4>
              <p className="text-sm text-muted-foreground">999-888-777</p>
              <Button
                onClick={() => soundManager.playClick()}
                variant="ghost"
                className="text-primary"
              >
                Write me →
              </Button>
            </div>

            <div className="glass glass-hover p-6 rounded-2xl text-center space-y-3 transition-all">
              <MessageCircle className="w-10 h-10 mx-auto text-primary" />
              <h4 className="font-semibold text-lg">Messenger</h4>
              <p className="text-sm text-muted-foreground">user.fb123</p>
              <Button
                onClick={() => soundManager.playClick()}
                variant="ghost"
                className="text-primary"
              >
                Write me →
              </Button>
            </div>
          </div>

          {/* Contact Form */}
          <div className="space-y-6">
            <h3 className="text-3xl font-bold mb-8">Write me your project</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label className="text-sm text-muted-foreground">Name</label>
                <Input
                  placeholder="Insert your name"
                  className="glass border-0"
                  onClick={() => soundManager.playClick()}
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm text-muted-foreground">Mail</label>
                <Input
                  type="email"
                  placeholder="Insert your email"
                  className="glass border-0"
                  onClick={() => soundManager.playClick()}
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm text-muted-foreground">Project</label>
                <Textarea
                  placeholder="Write your project"
                  className="glass border-0 min-h-[150px] resize-none"
                  onClick={() => soundManager.playClick()}
                />
              </div>

              <Button
                type="submit"
                size="lg"
                className="btn-glass w-full"
              >
                Send Message
                <Send className="w-4 h-4 ml-2" />
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
