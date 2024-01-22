"use client"

import { useState, useTransition, useRef, ElementRef } from "react";
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { updateStream } from "@/actions/stream";
import { toast } from "sonner";

interface InfoModalProps {
    initialName: string;
    initialThumbnailUrl: string | null;
};

export const InfoModal = ({
    initialName,
    initialThumbnailUrl
}: InfoModalProps) => {

    const closeRef = useRef<ElementRef<"button">>(null);
    const [name, setName] = useState(initialName);
    const [isPending, startTransition] = useTransition();

    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        startTransition(() => {
            updateStream({ name: name })
                .then(() => {
                    toast.success("Stream updated");
                    closeRef?.current?.click();
                })
                .catch(() => toast.error("Something went wrong"))
        })
    }

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value);
    };



    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button variant={"link"} size={"sm"} className="ml-auto ">
                    Edit
                </Button>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>
                        Edit stream info
                    </DialogTitle>
                </DialogHeader>
                <form className=" space-y-14" onSubmit={onSubmit}>
                    <div className="space-y-2 ">
                        <Label>
                            Name
                        </Label>
                        <Input
                            disabled={isPending}
                            placeholder="Stream name"
                            onChange={onChange}
                            value={name}
                        />
                    </div>
                    <div className="flex justify-between ">
                        <DialogClose ref={closeRef} asChild>
                            <Button type="button" variant={"ghost"}>
                                Cancel
                            </Button>
                        </DialogClose>
                        <Button
                            disabled={isPending}
                            variant={"primary"}
                            type="submit"
                        >
                            Save
                        </Button>
                    </div>
                </form>
            </DialogContent>
        </Dialog>
    )
}