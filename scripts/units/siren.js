const SpoNavT1 = extendContent(UnitType, "serpent", {
});
SpoNavT1.constructor = () => extend(UnitWaterMove, {});
//SpoNavT4.abilities.add(new StatusFieldAbility(StatusEffects.overclock, 60 * 6, 60 * 9, 64));
SpoNavT1.ammoType = AmmoTypes.power;
Blocks.navalFactory.plans.add(new UnitFactory.UnitPlan(SpoNavT1, 60 * 25, ItemStack.with(Items.silicon, 15, Items.sporePod, 15, Vars.content.getByName(ContentType.item, "diamond-ore-diamond"), 5)));