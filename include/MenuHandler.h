#pragma once
#include "Prisma.h"

class MenuHandler : public RE::BSTEventSink<RE::MenuOpenCloseEvent> {
public:
    static MenuHandler* GetSingleton() {
        static MenuHandler singleton;
        return &singleton;
    }

    static void Register() {
        auto ui = RE::UI::GetSingleton();
        if (ui) {
            ui->AddEventSink<RE::MenuOpenCloseEvent>(GetSingleton());
            logger::info("MenuHandler registered");
        }
    }

    RE::BSEventNotifyControl ProcessEvent(const RE::MenuOpenCloseEvent* event, RE::BSTEventSource<RE::MenuOpenCloseEvent>*) override {
        if (!event) {
            return RE::BSEventNotifyControl::kContinue;
        }

        if (event->menuName == RE::CraftingMenu::MENU_NAME) {
            if (event->opening) {
                Prisma::Show();
            } else {
                Prisma::Hide();
            }
        }

        return RE::BSEventNotifyControl::kContinue;
    }

private:
    MenuHandler() = default;
    MenuHandler(const MenuHandler&) = delete;
    MenuHandler(MenuHandler&&) = delete;
    ~MenuHandler() = default;

    MenuHandler& operator=(const MenuHandler&) = delete;
    MenuHandler& operator=(MenuHandler&&) = delete;
};