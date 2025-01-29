import type { ShallowRef } from "vue";
import Quill from "quill";

export function useCreateQuill(element: ShallowRef<HTMLElement | null> | string) {
  const toolbarOptions = [
    ["bold", "italic", "underline", "strike"], // toggled buttons
    ["blockquote", "code-block"],
    ["link", "image", "video", "formula"],

    [{ header: 1 }, { header: 2 }], // custom button values
    [{ list: "ordered" }, { list: "bullet" }, { list: "check" }],
    [{ script: "sub" }, { script: "super" }], // superscript/subscript
    [{ indent: "-1" }, { indent: "+1" }], // outdent/indent

    [{ header: [1, 2, 3, 4, 5, 6, false] }],

    [{ color: [] }], // dropdown with defaults from theme

    ["clean"], // remove formatting button
  ];

  return new Quill(typeof element === "string" ? element : element.value!, {
    modules: {
      toolbar: toolbarOptions,
    },
    placeholder: "Write something...",
    theme: "snow",
  });
}
