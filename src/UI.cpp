#include "UI.h"
#include "Prisma.h"
void UI::Register() {
    if (!SKSEMenuFramework::IsInstalled()) {
        return;
    }
    SKSEMenuFramework::SetSection(MOD_NAME);
    SKSEMenuFramework::AddSectionItem("Config", Main::Render);
}


void __stdcall UI::Main::Render() {
    if (ImGuiMCP::Button("Show Menu")) {
        Prisma::Show();
    }
}