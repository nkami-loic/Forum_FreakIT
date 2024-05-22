<!-- Chemin : assets/js/emojiForm.vue -->
<template>
  <div>
    <!-- Votre formulaire existant -->
    <form @submit.prevent="submitForm">

      <!-- Champ de texte avec Emoji Mart -->
      <input v-model="comment" type="text" placeholder="Écrivez votre commentaire...">
      <emoji-mart @select="addEmoji"></emoji-mart>

      <!-- Bouton de soumission -->
      <button type="submit">Ajouter un commentaire</button>
    </form>
  </div>
</template>

<script>
import 'emoji-mart-vue/dist/emoji-mart.css';

export default {
  data() {
    return {
      comment: '',
    };
  },
  methods: {
    submitForm() {
      console.log('Commentaire soumis :', this.comment);
      // Ajoutez la logique pour envoyer le commentaire au backend (via une requête AJAX par exemple).
    },
    addEmoji(emoji) {
      this.comment += emoji.native;
    },
  },
};
</script>