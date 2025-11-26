import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Shield, Lock, TrendingUp, Globe, ArrowRight } from "lucide-react";

const Index = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: Shield,
      title: "Secure Banking",
      description: "Bank-grade security with advanced encryption",
    },
    {
      icon: Lock,
      title: "Protected Accounts",
      description: "Multi-layer authentication and fraud protection",
    },
    {
      icon: TrendingUp,
      title: "Crypto Support",
      description: "Manage both Euro and Bitcoin seamlessly",
    },
    {
      icon: Globe,
      title: "Global Access",
      description: "Access your accounts from anywhere, anytime",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-primary-dark to-accent text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDE4YzMuMzEgMCA2IDIuNjkgNiA2cy0yLjY5IDYtNiA2LTYtMi42OS02LTYgMi42OS02IDYtNk0wIDE4YzMuMzEgMCA2IDIuNjkgNiA2cy0yLjY5IDYtNiA2LTYtMi42OS02LTYgMi42OS02IDYtNiIvPjwvZz48L2c+PC9zdmc+')] opacity-10"></div>
        
        <nav className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex justify-between items-center">
            <div className="text-3xl font-bold">BARCLAYS</div>
            <Button
              variant="outline"
              className="bg-white/10 border-white/20 text-white hover:bg-white/20"
              onClick={() => navigate("/auth")}
            >
              Sign In
            </Button>
          </div>
        </nav>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="text-center space-y-8">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
              The Future of
              <br />
              Digital Banking
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto">
              Secure, modern banking with cryptocurrency support. Manage your finances with confidence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                size="lg"
                className="bg-white text-primary hover:bg-white/90 shadow-elevated"
                onClick={() => navigate("/auth")}
              >
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-white/10 border-white/20 text-white hover:bg-white/20"
              >
                Learn More
              </Button>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-background to-transparent"></div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-br from-background to-secondary/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why Choose BARCLAYS?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Experience banking reimagined with cutting-edge technology and unwavering security.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {features.map((feature, index) => (
              <Card key={index} className="shadow-card hover:shadow-elevated transition-all border-primary/10">
                <CardContent className="pt-6 text-center space-y-4">
                  <div className="w-16 h-16 mx-auto bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center">
                    <feature.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary to-primary-dark text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <h2 className="text-3xl md:text-4xl font-bold">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-white/90">
            Join thousands of satisfied customers who trust BARCLAYS for their banking needs.
          </p>
          <Button
            size="lg"
            className="bg-white text-primary hover:bg-white/90 shadow-elevated"
            onClick={() => navigate("/auth")}
          >
            Create Your Account
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-card border-t">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4">
            <div className="text-2xl font-bold text-primary">BARCLAYS</div>
            <p className="text-sm text-muted-foreground">
              © 2024 BARCLAYS Digital Banking. All rights reserved.
            </p>
            <p className="text-xs text-muted-foreground">
              This is a demonstration project. Not a real banking service.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;