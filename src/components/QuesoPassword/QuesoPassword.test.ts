import { mount, shallowMount } from "@vue/test-utils";
import { describe, expect, test } from "vitest";
import QuesoPassword from "./QuesoPassword.vue";

describe("QuesoPassword", () => {
    test("renders correctly the object", () => {
        const data = {
            name: "field-name",
        };

        const wrapper = shallowMount(QuesoPassword, {
            props: data,
        });
        expect(wrapper.vm).toBeTruthy();
    });

    test("renders correctly the label", () => {
        const data = {
            label: "field-label",
        };

        const wrapper = mount(QuesoPassword, {
            props: data,
        });
        expect(wrapper.find(".queso-field__label").text()).toBe(data.label);
    });

    test("renders correctly the input", () => {
        const data = {
            name: "field-name",
        };

        const wrapper = mount(QuesoPassword, {
            props: data,
        });
        expect(wrapper.find(".queso-field__input").exists()).toBe(true);
    });
});
