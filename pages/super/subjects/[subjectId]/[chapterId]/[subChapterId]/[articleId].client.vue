<script lang="ts" setup>
import type { Delta } from "quill";
import type Quill from "quill";
import "quill/dist/quill.snow.css";

const route = useRoute("super-subjects-subjectId-chapterId-subChapterId-articleId");
const router = useRouter();
let quill: Quill;

const { data: article } = await useFetch(`/api/subjects/${route.params.subjectId}/chapters/${route.params.chapterId}/subChapters/${route.params.subChapterId}/articles/${route.params.articleId}`);
const { data: html } = await useFetch(`/api/subjects/${route.params.subjectId}/chapters/${route.params.chapterId}/subChapters/${route.params.subChapterId}/articles/${route.params.articleId}/html`);
const { data: delta } = await useFetch(`/api/subjects/${route.params.subjectId}/chapters/${route.params.chapterId}/subChapters/${route.params.subChapterId}/articles/${route.params.articleId}/delta`);

const editorEl = useTemplateRef("editorEl");

const editContent = ref(false);
const title = ref("");
const imageCover = ref<File | null>(null);

function handleImageCoverChange(e: Event) {
  const target = e.target as HTMLInputElement;
  if (target.files?.length) {
    imageCover.value = target.files[0];
  }
}

async function handleDeleteArticle() {
  await $fetch(`/api/subjects/${route.params.subjectId}/chapters/${route.params.chapterId}/subChapters/${route.params.subChapterId}/articles/${article.value?.id}`, {
    method: "DELETE",
    onResponse: () => {
      router.back();
    },
  });
}

async function handleUpdateArticle() {
  const html = quill.getSemanticHTML();
  const delta = JSON.stringify(quill.getContents());
  const titleText = title.value;

  const formData = new FormData();

  formData.append("title", titleText);
  formData.append("html", html);
  formData.append("delta", delta);
  formData.append("index", article.value!.index!.toString());
  if (imageCover.value) {
    formData.append("imageCover", imageCover.value);
  }

  await $fetch(`/api/subjects/${route.params.subjectId}/chapters/${route.params.chapterId}/subChapters/${route.params.subChapterId}/articles/${route.params.articleId}`, {
    method: "PUT",
    body: formData,
    onResponse: () => {
      router.back();
    },
  });
}

function setupQuill() {
  quill = useCreateQuill(editorEl);
  if (!editContent.value) {
    document.querySelector(".ql-toolbar")?.classList.add("hidden");
  }
}

watch(editContent, () => {
  document.querySelector(".ql-toolbar")?.classList.toggle("hidden", !editContent.value);
});

watch(delta, () => {
  if (!delta.value)
    return;

  quill.setContents(delta.value as unknown as Delta);
});

watch(article, () => {
  title.value = article.value?.title || "";
});

onMounted(() => {
  setupQuill();

  if (article.value) {
    title.value = article.value.title;
  }
  if (delta.value) {
    quill.setContents(delta.value as unknown as Delta);
  }
});

definePageMeta({
  layout: "superadmin",
});
</script>

<template>
  <div>
    <button @click="$router.back()">
      back
    </button>
    <button class="block" @click="editContent = !editContent">
      {{ editContent ? "Cancel" : "Edit" }}
    </button>
    <button type="button" @click="handleDeleteArticle">
      delete
    </button>
    <p>
      article name:
      <input v-if="editContent" v-model="title" type="text">
      <span v-else>{{ article?.title }}</span>
    </p>
    <input v-if="editContent" type="file" @change="handleImageCoverChange">
    <img v-else-if="article?.imageCoverName" :src="useGetImageCoverLink(article?.id, article?.imageCoverName)" alt="">
    <div class="" :class="{ hidden: !editContent }">
      <div ref="editorEl" class="bg-white" />
      <button @click="handleUpdateArticle">
        update
      </button>
    </div>
    <p>halo</p>
    <div :class="{ hidden: editContent }" v-html="html" />
  </div>
</template>
