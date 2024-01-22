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
import { UploadDropzone } from "@/lib/uploadthing";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { updateStream } from "@/actions/stream";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { Hint } from "../hint";
import { Trash } from "lucide-react";
import Image from "next/image";

interface InfoModalProps {
    initialName: string;
    initialThumbnailUrl: string | null;
};

export const InfoModal = ({
    initialName,
    initialThumbnailUrl
}: InfoModalProps) => {

    const router = useRouter();
    const closeRef = useRef<ElementRef<"button">>(null);
    const [name, setName] = useState(initialName);
    const [isPending, startTransition] = useTransition();

    const [thumbnailUrl, setThumbnailUrl] = useState(initialThumbnailUrl);

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
                    <div className="space-y-2 ">
                        <Label>
                            Thumbnail
                        </Label>
                        {thumbnailUrl ? (
                            <div className="relative overflow-hidden border aspect-video rounded-xl border-white/10">
                                <div className=" absolute top-2 right-2 z-[10]">
                                    <Hint label="Remove thumbnail" side="left" asChild>
                                    <Button
                                        type="button"
                                        disabled={isPending}
                                        onClick={() => {}}
                                        className=" h-auto w-auto p-1.5"
                                    >
                                        <Trash  className="w-4 h-4 "/>
                                    </Button>
                                    </Hint>
                                </div>
                                <Image 
                                    alt="Thumbnail"
                                    src={thumbnailUrl}
                                    fill
                                    className="object-cover "
                                />
                            </div>

                        ) : (
                            <div className="border rounded-xl outline-dashed outline-muted">
                                <UploadDropzone
                                    endpoint="thumbnailUploader"
                                    appearance={{
                                        label: {
                                            color: "#FFFFFF"
                                        },
                                        allowedContent: {
                                            color: "#FFFFFF"
                                        }
                                    }}
                                    onClientUploadComplete={(res) => {
                                        setThumbnailUrl(res?.[0]?.url);
                                        router.refresh();
                                    }}
                                />
                            </div>
                        )}
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