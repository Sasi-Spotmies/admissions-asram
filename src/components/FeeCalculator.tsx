import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { IndianRupee } from "lucide-react";

const feeStructure = {
  "Convener Quota": {
    "Pre-Clinical": { tuition: 450000, caution: 10000 },
    "Para-Clinical": { tuition: 475000, caution: 10000 },
    "Clinical": { tuition: 500000, caution: 10000 },
  },
  "S1 Category": {
    "Pre-Clinical": { tuition: 850000, caution: 10000 },
    "Para-Clinical": { tuition: 900000, caution: 10000 },
    "Clinical": { tuition: 950000, caution: 10000 },
  },
  "S2 Category": {
    "Pre-Clinical": { tuition: 1200000, caution: 10000 },
    "Para-Clinical": { tuition: 1250000, caution: 10000 },
    "Clinical": { tuition: 1300000, caution: 10000 },
  },
};

export const FeeCalculator = () => {
  const [quota, setQuota] = useState<keyof typeof feeStructure | "">("");
  const [stream, setStream] = useState<string>("");

  const selectedFee = quota && stream ? feeStructure[quota][stream as keyof typeof feeStructure[typeof quota]] : null;
  const total = selectedFee ? selectedFee.tuition + selectedFee.caution : 0;

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 font-poppins gradient-text">
            Fee Structure Explorer
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Calculate your program fees based on quota and specialization
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="p-8 shadow-elegant bg-gradient-to-br from-card to-muted/30">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {/* Quota Selector */}
              <div className="space-y-2">
                <Label htmlFor="quota" className="text-base font-medium">
                  Select Quota
                </Label>
                <Select value={quota} onValueChange={(value) => setQuota(value as keyof typeof feeStructure)}>
                  <SelectTrigger id="quota" className="h-12 bg-background">
                    <SelectValue placeholder="Choose your quota" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Convener Quota">Convener Quota</SelectItem>
                    <SelectItem value="S1 Category">S1 Category (Management)</SelectItem>
                    <SelectItem value="S2 Category">S2 Category (NRI)</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Stream Selector */}
              <div className="space-y-2">
                <Label htmlFor="stream" className="text-base font-medium">
                  Select Stream
                </Label>
                <Select value={stream} onValueChange={setStream}>
                  <SelectTrigger id="stream" className="h-12 bg-background">
                    <SelectValue placeholder="Choose specialization stream" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Pre-Clinical">Pre-Clinical</SelectItem>
                    <SelectItem value="Para-Clinical">Para-Clinical</SelectItem>
                    <SelectItem value="Clinical">Clinical</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Fee Display */}
            {selectedFee && (
              <div className="animate-fade-in">
                <div className="bg-gradient-to-br from-primary-light/20 to-secondary-light/20 rounded-xl p-6 space-y-4">
                  <div className="flex justify-between items-center pb-3 border-b border-border">
                    <span className="text-muted-foreground">Tuition Fee</span>
                    <span className="font-semibold flex items-center gap-1">
                      <IndianRupee className="w-4 h-4" />
                      {selectedFee.tuition.toLocaleString('en-IN')}
                    </span>
                  </div>
                  <div className="flex justify-between items-center pb-3 border-b border-border">
                    <span className="text-muted-foreground">Caution Deposit</span>
                    <span className="font-semibold flex items-center gap-1">
                      <IndianRupee className="w-4 h-4" />
                      {selectedFee.caution.toLocaleString('en-IN')}
                    </span>
                  </div>
                  <div className="flex justify-between items-center pt-2">
                    <span className="text-lg font-bold">Total Fee</span>
                    <span className="text-2xl font-bold gradient-text flex items-center gap-1">
                      <IndianRupee className="w-6 h-6" />
                      {total.toLocaleString('en-IN')}
                    </span>
                  </div>
                </div>
                
                <p className="text-sm text-muted-foreground mt-4 text-center">
                  * Fee structure is subject to university guidelines
                </p>
              </div>
            )}

            {!selectedFee && (
              <div className="text-center py-12 text-muted-foreground">
                <p>Select both quota and stream to view fee details</p>
              </div>
            )}
          </Card>
        </div>
      </div>
    </section>
  );
};
