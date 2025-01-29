<script lang="ts" setup>
import type Quill from "quill";
import "quill/dist/quill.snow.css";

let quill: Quill;
const route = useRoute("super-subjects-subjectId-chapterId-subChapterId-create-article");
const router = useRouter();

const editorEl = useTemplateRef("editorEl");
const title = ref("");
const imageCover = ref<File | null>(null);

onMounted(() => {
  quill = useCreateQuill(editorEl);
});

function handleImageCoverChange(e: Event) {
  const target = e.target as HTMLInputElement;
  if (target.files?.length) {
    imageCover.value = target.files[0];
  }
}

async function submitArticle() {
  const html = quill.getSemanticHTML();
  const delta = JSON.stringify(quill.getContents());
  const titleText = title.value;

  const formData = new FormData();

  formData.append("title", titleText);
  formData.append("html", html);
  formData.append("delta", delta);
  if (imageCover.value) {
    formData.append("imageCover", imageCover.value);
  }

  const article = await $fetch(`/api/subjects/${route.params.subjectId}/chapters/${route.params.chapterId}/subChapters/${route.params.subChapterId}/articles`, {
    method: "POST",
    body: formData,
  });

  // eslint-disable-next-line no-console
  console.log(article);

  router.back();
}

definePageMeta({
  layout: "superadmin",
});
</script>

<template>
  <div>
    <button @click="$router.back()">
      back
    </button>
    <div class="">
      <label>article title</label>
      <input v-model="title" type="text">
    </div>
    <div class="">
      <label>Image cover</label>
      <input type="file" @change="handleImageCoverChange">
    </div>
    <div ref="editorEl" class="bg-white" />
    <button type="button" @click="submitArticle">
      Create
    </button>
  </div>
</template>

<style scoped>
</style>
