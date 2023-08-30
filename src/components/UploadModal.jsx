"use client";

import { modalState } from "../../atom/modal";
import { useRecoilState } from "recoil";

export default function UploadModal() {
  const [open, setOpen] = useRecoilState(modalState);
  return <div>
    {
        open && <h1>Modal open</h1>
    }
  </div>;
}
