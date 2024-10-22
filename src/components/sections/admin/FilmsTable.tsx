import { Separator } from "@/components/ui/separator";
import { motion } from "framer-motion";

export const FilmsTable = () => {
  return (
    <motion.section
      className="col-span-3 lg:col-span-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.2 } }}
      exit={{ opacity: 0, transition: { duration: 0.2 } }}
      key={"home"}
    >
      <div className="h-full px-4 py-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="space-y-1">
            <h2 className="text-2xl font-semibold tracking-tight">Films</h2>
          </div>
        </div>
        <Separator className="my-4" />

        <div>table</div>
      </div>
    </motion.section>
  );
};
