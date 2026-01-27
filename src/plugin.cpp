#include "Plugin.h"
#include "Hooks.h"
#include "Prisma.h"
#include "MenuHandler.h"

void OnMessage(SKSE::MessagingInterface::Message* message) {
    if (message->type == SKSE::MessagingInterface::kPostLoad) {
        Prisma::Install();
    }

    if (message->type == SKSE::MessagingInterface::kDataLoaded) {
        MenuHandler::Register();
        logger::info("MenuHandler registered for crafting menu");
    }
}

SKSEPluginLoad(const SKSE::LoadInterface* skse) {
    SKSE::Init(skse);
    SKSE::GetMessagingInterface()->RegisterListener(OnMessage);
    SetupLog();
    logger::info("Plugin loaded");
    Hooks::Install();
    return true;
}