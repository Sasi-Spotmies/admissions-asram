import { Card } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table";

const seatMatrix = [
  { sn: 1, category: "Convener Quota (CQ)", seats: 78 },
  { sn: 2, category: "Management Quota (MQ)", seats: 82 },
];

const cq = [
  { sn: 1, part: "Tuition Fee", pre: "₹ 70,380", para: "₹ 1,55,250", clinical: "₹ 4,96,800", remark: "Yearly" },
  { sn: 2, part: "College Caution Deposit", pre: "₹ 15,000", para: "₹ 15,000", clinical: "₹ 15,000", remark: "Refundable" },
  { sn: 3, part: "Additional Fee", pre: "₹ 45,000", para: "₹ 45,000", clinical: "₹ 45,000", remark: "One time only" },
  { sn: 4, part: "Skill Lab", pre: "₹ 10,000", para: "₹ 10,000", clinical: "₹ 10,000", remark: "Every Year" },
];
const cqTotals = { pre: "₹ 1,40,380", para: "₹ 2,25,250", clinical: "₹ 5,66,800" };

const s1 = [
  { sn: 1, part: "Tuition Fee", pre: "₹ 1,40,760", para: "₹ 3,10,500", clinical: "₹ 9,93,600", remark: "Yearly" },
  { sn: 2, part: "College Caution Deposit", pre: "₹ 15,000", para: "₹ 15,000", clinical: "₹ 15,000", remark: "Refundable" },
  { sn: 3, part: "Additional Fee", pre: "₹ 45,000", para: "₹ 45,000", clinical: "₹ 45,000", remark: "One time only" },
  { sn: 4, part: "Skill Lab", pre: "₹ 10,000", para: "₹ 10,000", clinical: "₹ 10,000", remark: "Every Year" },
];
const s1Totals = { pre: "₹ 2,10,760", para: "₹ 3,80,500", clinical: "₹ 10,63,600" };

const s2 = [
  { sn: 1, part: "Tuition Fee", pre: "₹ 9,20,000", para: "₹ 17,25,000", clinical: "₹ 57,50,000", remark: "Yearly" },
  { sn: 2, part: "College Caution Deposit", pre: "₹ 15,000", para: "₹ 15,000", clinical: "₹ 15,000", remark: "Refundable" },
  { sn: 3, part: "Additional Fee", pre: "₹ 45,000", para: "₹ 45,000", clinical: "₹ 45,000", remark: "One time only" },
  { sn: 4, part: "Skill Lab", pre: "₹ 10,000", para: "₹ 10,000", clinical: "₹ 10,000", remark: "Every Year" },
];
const s2Totals = { pre: "₹ 9,90,000", para: "₹ 17,95,000", clinical: "₹ 58,20,000" };

const hostel = [
  { sn: 1, name: "Hostel Admission Fee ( One Time)", occ: "-", amt: "₹ 10,000" },
  { sn: 2, name: "Caution Deposit (One Time & 50% Refundable)", occ: "-", amt: "₹ 10,000" },
  { sn: 3, name: "New PG Girls Hostel A/c – Studio Apartment", occ: "Double", amt: "₹ 1,75,000 (Each Person)" },
  { sn: 3.1, name: "New PG Girls Hostel A/c – Cluster Room", occ: "Double", amt: "₹ 1,55,000 (Each Person)" },
  { sn: 4, name: "New PG Boys Hostel A/c", occ: "Single", amt: "₹ 2,55,000" },
  { sn: 5, name: "New PG Boys Hostel A/c", occ: "Double", amt: "₹ 1,45,000 (Each Person)" },
  { sn: 6, name: "E-Quarters & C-Quarters", occ: "Single", amt: "₹ 3,80,000" },
  { sn: 7, name: "E-Quarters & C-Quarters", occ: "Double", amt: "₹ 2,10,000 (Each Person)" },
  { sn: 8, name: "PG Old Boys Hostel Non A/c", occ: "Single", amt: "₹ 2,05,000" },
  { sn: 9, name: "PG Old Boys Hostel Non A/c", occ: "Double", amt: "₹ 1,25,000 (Each Person)" },
];

function PremiumTable({ children }: { children: React.ReactNode }) {
  return (
    <Card className="border border- shadow-soft overflow-hidden bg-gradient-to-br from-white via-amber-50/30 to-white">
      <div className="overflow-x-auto">
        {children}
      </div>
    </Card>
  );
}

export const FeeCalculator = () => {
  return (
    <section id="fees" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold font-serif text-gray-900">Post Graduate Fee & Seat Information (2025–26)</h2>
          <p className="text-sm md:text-base text-gray-600 mt-2">Light theme, premium classic tables. All amounts in INR.</p>
        </div>

        <Tabs defaultValue="matrix" className="max-w-6xl mx-auto">
          <TabsList className="grid grid-cols-5 bg-white/80 backdrop-blur border border-amber-100" data-reveal-item>
            <TabsTrigger value="matrix">Seat Matrix</TabsTrigger>
            <TabsTrigger value="cq">Convener</TabsTrigger>
            <TabsTrigger value="s1">S1</TabsTrigger>
            <TabsTrigger value="s2">S2</TabsTrigger>
            <TabsTrigger value="hostel">Hostel</TabsTrigger>
          </TabsList>

          <TabsContent value="matrix" className="mt-6">
            <PremiumTable data-reveal-item>
              <Table>
                <TableHeader>
                  <TableRow className="bg-amber-50/80">
                    <TableHead className="w-24">Sl. No.</TableHead>
                    <TableHead>Category</TableHead>
                    <TableHead className="text-right">Postgraduate (MD/MS)</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {seatMatrix.map((r, i) => (
                    <TableRow key={String(r.sn)} className={`${i % 2 === 1 ? 'bg-amber-50/30' : ''}`}>
                      <TableCell>{r.sn}</TableCell>
                      <TableCell className="font-medium text-gray-900">{r.category}</TableCell>
                      <TableCell className="text-right font-semibold">{r.seats}</TableCell>
                    </TableRow>
                  ))}
                  <TableRow className="bg-amber-100/70">
                    <TableCell className="font-semibold">Total</TableCell>
                    <TableCell />
                    <TableCell className="text-right font-bold">160</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </PremiumTable>
          </TabsContent>

          <TabsContent value="cq" className="mt-6">
            <PremiumTable data-reveal-item>
              <Table>
                <TableHeader>
                  <TableRow className="bg-amber-50/80">
                    <TableHead>Sr.No</TableHead>
                    <TableHead>Particulars</TableHead>
                    <TableHead className="text-right">Pre Clinical</TableHead>
                    <TableHead className="text-right">Para Clinical</TableHead>
                    <TableHead className="text-right">Clinical</TableHead>
                    <TableHead>Remark</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {cq.map((r, i) => (
                    <TableRow key={r.sn} className={`${i % 2 === 1 ? 'bg-amber-50/30' : ''}`}>
                      <TableCell>{r.sn}</TableCell>
                      <TableCell className="font-medium text-gray-900">{r.part}</TableCell>
                      <TableCell className="text-right">{r.pre}</TableCell>
                      <TableCell className="text-right">{r.para}</TableCell>
                      <TableCell className="text-right">{r.clinical}</TableCell>
                      <TableCell>{r.remark}</TableCell>
                    </TableRow>
                  ))}
                  <TableRow className="bg-amber-100/70">
                    <TableCell className="font-semibold" colSpan={2}>Total Fee :</TableCell>
                    <TableCell className="text-right font-semibold">{cqTotals.pre}</TableCell>
                    <TableCell className="text-right font-semibold">{cqTotals.para}</TableCell>
                    <TableCell className="text-right font-bold">{cqTotals.clinical}</TableCell>
                    <TableCell />
                  </TableRow>
                </TableBody>
              </Table>
            </PremiumTable>
          </TabsContent>

          <TabsContent value="s1" className="mt-6">
            <PremiumTable data-reveal-item>
              <Table>
                <TableHeader>
                  <TableRow className="bg-amber-50/80">
                    <TableHead>Sr.No</TableHead>
                    <TableHead>Particulars</TableHead>
                    <TableHead className="text-right">Pre Clinical</TableHead>
                    <TableHead className="text-right">Para Clinical</TableHead>
                    <TableHead className="text-right">Clinical</TableHead>
                    <TableHead>Remark</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {s1.map((r, i) => (
                    <TableRow key={r.sn} className={`${i % 2 === 1 ? 'bg-amber-50/30' : ''}`}>
                      <TableCell>{r.sn}</TableCell>
                      <TableCell className="font-medium text-gray-900">{r.part}</TableCell>
                      <TableCell className="text-right">{r.pre}</TableCell>
                      <TableCell className="text-right">{r.para}</TableCell>
                      <TableCell className="text-right">{r.clinical}</TableCell>
                      <TableCell>{r.remark}</TableCell>
                    </TableRow>
                  ))}
                  <TableRow className="bg-amber-100/70">
                    <TableCell className="font-semibold" colSpan={2}>Total Fee :</TableCell>
                    <TableCell className="text-right font-semibold">{s1Totals.pre}</TableCell>
                    <TableCell className="text-right font-semibold">{s1Totals.para}</TableCell>
                    <TableCell className="text-right font-bold">{s1Totals.clinical}</TableCell>
                    <TableCell />
                  </TableRow>
                </TableBody>
              </Table>
            </PremiumTable>
          </TabsContent>

          <TabsContent value="s2" className="mt-6">
            <PremiumTable data-reveal-item>
              <Table>
                <TableHeader>
                  <TableRow className="bg-amber-50/80">
                    <TableHead>Sr.No</TableHead>
                    <TableHead>Particulars</TableHead>
                    <TableHead className="text-right">Pre Clinical</TableHead>
                    <TableHead className="text-right">Para Clinical</TableHead>
                    <TableHead className="text-right">Clinical</TableHead>
                    <TableHead>Remark</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {s2.map((r, i) => (
                    <TableRow key={r.sn} className={`${i % 2 === 1 ? 'bg-amber-50/30' : ''}`}>
                      <TableCell>{r.sn}</TableCell>
                      <TableCell className="font-medium text-gray-900">{r.part}</TableCell>
                      <TableCell className="text-right">{r.pre}</TableCell>
                      <TableCell className="text-right">{r.para}</TableCell>
                      <TableCell className="text-right">{r.clinical}</TableCell>
                      <TableCell>{r.remark}</TableCell>
                    </TableRow>
                  ))}
                  <TableRow className="bg-amber-100/70">
                    <TableCell className="font-semibold" colSpan={2}>Total Fee :</TableCell>
                    <TableCell className="text-right font-semibold">{s2Totals.pre}</TableCell>
                    <TableCell className="text-right font-semibold">{s2Totals.para}</TableCell>
                    <TableCell className="text-right font-bold">{s2Totals.clinical}</TableCell>
                    <TableCell />
                  </TableRow>
                </TableBody>
              </Table>
            </PremiumTable>
          </TabsContent>

          <TabsContent value="hostel" className="mt-6">
            <PremiumTable>
              <Table>
                <TableHeader>
                  <TableRow className="bg-amber-50/80">
                    <TableHead>Sl. No.</TableHead>
                    <TableHead>Name of the Residence</TableHead>
                    <TableHead>Occupancy</TableHead>
                    <TableHead className="text-right">Amount Per Annum</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {hostel.map((r, i) => (
                    <TableRow key={String(r.sn)} className={`${i % 2 === 1 ? 'bg-amber-50/30' : ''}`}>
                      <TableCell>{r.sn}</TableCell>
                      <TableCell className="font-medium text-gray-900">{r.name}</TableCell>
                      <TableCell>{r.occ}</TableCell>
                      <TableCell className="text-right">{r.amt}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </PremiumTable>
            <p className="text-xs text-gray-600 mt-3 text-center">Note: Power Charges and Mess Charges are extra. No refund will be entertained for withdrawal from hostel stay during the one year period</p>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};
