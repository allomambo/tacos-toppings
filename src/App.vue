<template>
    <h3>Fields</h3>
    <QuesoTextField name="textfield" label="QuesoTextField" v-model="TextField" />
    <QuesoPassword name="password" label="QuesoPassword" v-model="PasswordField" />
    <QuesoTextArea name="textarea" label="QuesoTextArea" v-model="TextArea" />
    <QuesoCheckbox
        name="checkbox"
        label="QuesoCheckbox"
        box-label="Lorem ipsum dolor sit amet"
        is-required
        v-model="Checkbox"
    />
    <QuesoCheckboxMultiple
        name="checkboxMultiple"
        label="QuesoCheckboxMultiple"
        :choices="dataChoices"
        is-required
        v-model="CheckboxMultiple"
    />
    <QuesoSelect
        name="select"
        label="QuesoSelect"
        placeholder="Select an option"
        :options="dataOptions"
        v-model="Select"
    />
    <QuesoSelectMultiple
        name="selectMultiple"
        label="QuesoSelectMultiple"
        placeholder="Select options"
        :options="dataOptions"
        v-model="SelectMultiple"
    />
    <QuesoRadio name="radio" label="QuesoRadio" :choices="dataChoices" v-model="Radio" />
    <hr />

    <h3>QuesoClickable</h3>
    <QuesoClickable>Clickable</QuesoClickable>
    <hr />

    <h3>QuesoDropdown</h3>
    <h5>Single choice</h5>
    <QuesoDropdown :options="dataOptions" />
    <h5>Multiple choice</h5>
    <QuesoDropdown :options="dataOptions" multiple />
    <hr />

    <h3>QuesoModal</h3>
    <button @click="openModal()">Open modal</button>
    <QuesoModal ref="myModal">
        <p>CONTENT HERE</p>
    </QuesoModal>
    <hr />

    <h3>QuesoCollapsible</h3>
    <QuesoCollapsible expand-on-mount>
        <template #headerText>
            <p>expand-on-mount Lorem ipsum dolor sit amet</p>
        </template>
        <template #content>
            <p>
                Consectetur adipiscing elit. Vivamus sed neque quis magna maximus finibus vel vitae mi. Lorem ipsum
                dolor sit amet, consectetur adipiscing elit. Integer aliquet libero imperdiet, imperdiet sem vel, tempor
                justo. Nam malesuada nunc quam, at auctor erat tincidunt at. In luctus purus sit amet nibh pretium, sed
                tincidunt tortor dignissim. Mauris elit risus, pretium ut mattis eu, faucibus eu nulla. Donec congue
                ante vitae odio egestas bibendum. Donec maximus maximus lorem, non imperdiet mi fringilla vel. Donec
                dictum, nunc sed porttitor tempus, ante nibh vestibulum elit, at interdum magna est et dui. Sed at nibh
                neque. Vivamus mauris justo, eleifend eu metus ut, pellentesque molestie tellus. Nam accumsan lorem at
                enim consectetur, vel dapibus justo egestas. Vivamus vitae pretium dui. Vivamus non tortor ut neque
                tristique efficitur id eget nulla. Sed dui sapien, convallis sed tempus vel, pulvinar vitae nibh. Morbi
                hendrerit accumsan purus ac maximus.
            </p>
        </template>
    </QuesoCollapsible>
    <QuesoCollapsible>
        <template #headerText>
            <p>Lorem ipsum dolor sit amet</p>
        </template>
        <template #content>
            <p>
                Consectetur adipiscing elit. Vivamus sed neque quis magna maximus finibus vel vitae mi. Lorem ipsum
                dolor sit amet, consectetur adipiscing elit. Integer aliquet libero imperdiet, imperdiet sem vel, tempor
                justo. Nam malesuada nunc quam, at auctor erat tincidunt at. In luctus purus sit amet nibh pretium, sed
                tincidunt tortor dignissim. Mauris elit risus, pretium ut mattis eu, faucibus eu nulla. Donec congue
                ante vitae odio egestas bibendum. Donec maximus maximus lorem, non imperdiet mi fringilla vel. Donec
                dictum, nunc sed porttitor tempus, ante nibh vestibulum elit, at interdum magna est et dui. Sed at nibh
                neque. Vivamus mauris justo, eleifend eu metus ut, pellentesque molestie tellus. Nam accumsan lorem at
                enim consectetur, vel dapibus justo egestas. Vivamus vitae pretium dui. Vivamus non tortor ut neque
                tristique efficitur id eget nulla. Sed dui sapien, convallis sed tempus vel, pulvinar vitae nibh. Morbi
                hendrerit accumsan purus ac maximus.
            </p>
        </template>
    </QuesoCollapsible>
    <hr />

    <h3>QuesoScrollable</h3>
    <QuesoScrollable>
        <p v-for="i in 8">
            Consectetur adipiscing elit. Vivamus sed neque quis magna maximus finibus vel vitae mi. Lorem ipsum dolor
            sit amet, consectetur adipiscing elit. Integer aliquet libero imperdiet, imperdiet sem vel, tempor justo.
            Nam malesuada nunc quam, at auctor erat tincidunt at. In luctus purus sit amet nibh pretium, sed tincidunt
            tortor dignissim. Mauris elit risus, pretium ut mattis eu, faucibus eu nulla. Donec congue ante vitae odio
            egestas bibendum. Donec maximus maximus lorem, non imperdiet mi fringilla vel. Donec dictum, nunc sed
            porttitor tempus, ante nibh vestibulum elit, at interdum magna est et dui. Sed at nibh neque. Vivamus mauris
            justo, eleifend eu metus ut, pellentesque molestie tellus. Nam accumsan lorem at enim consectetur, vel
            dapibus justo egestas. Vivamus vitae pretium dui. Vivamus non tortor ut neque tristique efficitur id eget
            nulla. Sed dui sapien, convallis sed tempus vel, pulvinar vitae nibh. Morbi hendrerit accumsan purus ac
            maximus.
        </p>
    </QuesoScrollable>
    <hr />

    <h3>Grid</h3>
    <div class="l-grid">
        <template v-for="i in gridColumns">
            <div :class="`col-${i} inner`">col-{{ i }}</div>
            <div v-if="i != gridColumns" :class="`col-${gridColumns - i} inner`">col-{{ gridColumns - i }}</div>
        </template>
        <div class="col-full inner">col-full</div>
        <div class="col-half inner">col-half</div>
        <div class="col-half inner">col-half</div>
    </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

import {
    QuesoCheckbox,
    QuesoCheckboxMultiple,
    QuesoClickable,
    QuesoCollapsible,
    QuesoDropdown,
    QuesoModal,
    QuesoScrollable,
    QuesoSelect,
    QuesoSelectMultiple,
    QuesoTextArea,
    QuesoTextField,
    QuesoPassword,
    QuesoRadio,
} from "./components";
import { c } from "vite/dist/node/types.d-aGj9QkWt";

const dataOptions = [
    {
        value: "heavy-metal",
        label: "Heavy Metal",
        data: {
            icon: "bell",
        },
    },
    {
        value: "classic",
        label: "Classic",
        data: {
            icon: "link",
        },
    },
    {
        value: "funk-and-disco",
        label: "Funk and Disco",
        data: {
            icon: "funnel",
        },
    },
    {
        value: "folk-and-acoustic",
        label: "Folk and Acoustic",
        data: {
            icon: "garbage",
        },
    },
    {
        value: "country",
        label: "Country",
        data: {
            icon: "lock",
        },
    },
    {
        value: "dance-and-electronic",
        label: "Dance and Electronic",
        data: {
            icon: "magnify_glass",
        },
    },
];

const dataChoices = [
    {
        value: "heavy-metal",
        label: "Heavy Metal",
    },
    {
        value: "classic",
        label: "Classic",
        isChecked: true,
    },
    {
        value: "funk-and-disco",
        label: "Funk and Disco",
    },
    {
        value: "folk-and-acoustic",
        label: "Folk and Acoustic",
    },
    {
        value: "country",
        label: "Country",
    },
    {
        value: "dance-and-electronic",
        label: "Dance and Electronic",
    },
];

// Modal
const myModal = ref<InstanceType<typeof QuesoModal> | null>(null);

const openModal = () => {
    myModal.value?.open();
};

// Fields
const TextField = ref("text field value");
const PasswordField = ref("");
const TextArea = ref("text area value");
const Checkbox = ref(true);
const CheckboxMultiple = ref(["dance-and-electronic", "folk-and-acoustic"]);
const Select = ref("");
const SelectMultiple = ref([]);
const Radio = ref("");

// Grid
const gridColumns = 8;
</script>

<style lang="scss">
:root {
    --queso-scrollable-height: 15rem;
}

.l-grid {
    @include grid($columns: 8, $gap: 10px, $var-prefix: "queso");

    > * {
        outline: 1px dashed black;
    }
}
</style>
