import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { TabsContent } from "@/components/ui/tabs";

const Verification = () => {
  return (
    <TabsContent value="verification" className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Product Verification</CardTitle>
          <CardDescription>
            Blockchain-based product authenticity verification
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-3">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">Verified Products</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-green-600">842</div>
                <p className="text-sm text-muted-foreground">
                  Successfully verified
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">Pending Verification</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-blue-600">127</div>
                <p className="text-sm text-muted-foreground">
                  Awaiting verification
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">Failed Verification</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-red-600">18</div>
                <p className="text-sm text-muted-foreground">
                  Verification failed
                </p>
              </CardContent>
            </Card>
          </div>
        </CardContent>
      </Card>
    </TabsContent>
  );
};
export default Verification;
