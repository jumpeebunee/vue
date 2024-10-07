<template>
  <div class="content">
    <div class="preference block">
      <p>Preference: {{ pickedPreference }}</p>

      <div v-for="option in preference" :key="option">
        <label :for="option">{{ option }}</label>
        <input
          v-model="pickedPreference"
          :id="option"
          type="radio"
          name="preference"
          :value="option"
        />
      </div>
    </div>

    <div class="block">
      <p>You're name: {{ message }}</p>

      <input
        v-if="pickedPreference === 'lazy'"
        v-model.lazy="message"
        type="text"
        placeholder="You're message"
      />
      <input
        v-else-if="pickedPreference === 'number'"
        v-model.number="message"
        type="text"
        placeholder="You're message"
      />
      <input
        v-else
        v-model="message"
        type="text"
        placeholder="You're message"
      />
    </div>

    <div class="block">
      <span>Comment</span>
      <p>You're comment: {{ multiLineMessage }}</p>
      <textarea
        v-model="multiLineMessage"
        placeholder="Multiline message"
        cols="40"
        rows="4"
      ></textarea>
    </div>

    <div class="block">
      <p>Picked friends: {{ checkedNames }}</p>
      <label for="Jack">Jack</label>
      <input
        v-model="checkedNames"
        type="checkbox"
        name="names"
        id="Jack"
        value="Jack"
      />

      <label for="John">John</label>
      <input
        v-model="checkedNames"
        type="checkbox"
        name="names"
        id="John"
        value="John"
      />

      <label for="Mike">Mike</label>
      <input
        v-model="checkedNames"
        type="checkbox"
        name="names"
        id="Mike"
        value="Mike"
      />
    </div>

    <div class="block">
      <p>Subscribe for updates: {{ isSubscribeToUpdates }}</p>
      <label for="updatesAgree">Yes</label>
      <input
        v-model="isSubscribeToUpdates"
        id="updatesAgree"
        name="updates"
        value="yes"
        type="radio"
      />

      <label for="updatesDecline">No</label>
      <input
        v-model="isSubscribeToUpdates"
        id="updatesDecline"
        name="updates"
        value="no"
        type="radio"
      />
    </div>

    <div class="block">
      <p>Selected offers: {{ offers }}</p>
      <select multiple v-model="offers">
        <option value="Food">Food</option>
        <option value="Water">Water</option>
        <option value="Spa">Spa</option>
        <option value="Dog or Cat">Dog or Cat</option>
        <option value="Parking lot">Parking lot</option>
      </select>
    </div>

    <div class="block">
      <p>I agree to the advertising notifications: {{ agree }}</p>
      <input
        v-model="agree"
        type="checkbox"
        true-value="yes"
        false-value="no"
      />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: "",
      multiLineMessage: "",
      offers: [],
      pickedPreference: "default",
      preference: ["default", "lazy", "numbers"],
      checkedNames: [],
      agree: "yes",
      isSubscribeToUpdates: "yes",
    };
  },
};
</script>

<style>
.block {
  padding: 20px 50px;
  border: solid 1px black;
  max-width: 400px;
  border-radius: 4px;
  width: 100%;
}

.content {
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 10px;
}
</style>
