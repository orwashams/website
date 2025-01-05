"use client";
import { useState } from "react";
import { PenLineIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

type Props = {
  title: string;
  setTitle: (title: string) => void;
};

export const CmsShowcase = ({ title, setTitle }: Props) => {
  const [newTitle, setNewTitle] = useState(title);
  const [isOpen, setIsOpen] = useState(false);

  const handleSave = () => {
    setTitle(newTitle);
    setIsOpen(false);
  };

  return (
    <div
      className={cn(
        "w-44 h-44 border border-light/30 bg-dark flex flex-col gap-8 py-6 rounded-2xl transition-colors duration-500 items-center justify-between"
      )}
    >
      <h3 className={cn("text-light uppercase")}>CMS</h3>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogTrigger asChild className="flex justify-center">
          <div>
            <Button className="flex p-2 justify-center items-center gap-2 bg-dark hover:bg-light/5 text-white transition-all duration-300 ease-in-out border-light border rounded-full">
              <PenLineIcon size={20} />
            </Button>
          </div>
        </DialogTrigger>

        <DialogContent className="sm:max-w-[425px] flex flex-col justify-center items-center bg-dark border-none">
          <DialogHeader>
            <DialogTitle className="text-center">Edit Title</DialogTitle>
            <DialogDescription className="text-center">
              Make changes to the title here. Click save when you're done.
            </DialogDescription>
          </DialogHeader>
          <div className="w-full">
            <Input
              id="name"
              value={newTitle}
              onChange={(e) => setNewTitle(e.target.value)}
              className="w-full"
              maxLength={50}
            />
          </div>
          <DialogFooter>
            <Button
              variant="outline"
              className="text-dark hover:text-dark/80 bg-light hover:bg-light/80 border-none"
              onClick={handleSave}
              type="button"
            >
              Save
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default CmsShowcase;
