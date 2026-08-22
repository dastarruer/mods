/**
 * Bay Harbor Butcher plugin - by Jojje
 *
 *
 * @licence LGPL-v3
 */

const { PEACOCKVER, PEACOCKVERSTRING } = require("@peacockproject/core/utils")
const { log, LogLevel } = require("@peacockproject/core/loggingInterop")

const challenges = [
	{
		Id: "912bcc0e-8e51-418c-a052-031460e69b7e",
		Name: "UI_CHALLENGES_BAY_HARBOR_BUTCHER_TONIGHTS_THE_NIGHT_NAME",
		ImageName: "images/challenges/bayharborbutcher/tonights_the_night.jpg",
		Description: "UI_CHALLENGES_BAY_HARBOR_BUTCHER_TONIGHTS_THE_NIGHT_DESC",
		Rewards: {
			MasteryXP: 4000
		},
		Drops: ["TOKEN_OUTFIT_HERO_BAY_HARBOR_BUTCHER"],
		IsPlayable: true,
		IsLocked: false,
		HideProgression: false,
		CategoryName: "UI_MENU_PAGE_PROFILE_CHALLENGES_CATEGORY_SIGNATUREKILL",
		Icon: "challenge_category_assassination",
		LocationId: "LOCATION_MIAMI",
		ParentLocationId: "LOCATION_PARENT_MIAMI",
		Type: "location",
		DifficultyLevels: [],
		OrderIndex: 10000,
		XpModifier: {},
		RuntimeType: "Hit",
		Definition: {
			Scope: "session",
			Context: {
				TargetKilled: false
			},
			States: {
				Start: {
					ContractEnd: {
						Condition: {
							$eq: ["$.TargetKilled", true]
						},
						Transition: "Success"
					},
					Kill: [
						{
							Condition: {
								$and: [
									{
										$eq: ["$Value.IsTarget", true]
									},
									{
										$eq: ["$Value.OutfitIsHitmanSuit", true]
									},
									{
										$or: [
											{
												$eq: ["$Value.KillItemRepositoryId", "2b1bd2af-554e-4ea7-a717-3f6d0eb0215f"]
											},
											{
												$eq: ["$Value.KillItemRepositoryId", "2c037ef5-a01b-4532-8216-1d535193a837"]
											},
											{
												$eq: ["$Value.KillItemRepositoryId", "3dbd9ee9-f887-41bb-83bf-386324d11485"]
											},
											{
												$eq: ["$Value.KillItemRepositoryId", "5c211971-235a-4856-9eea-fe890940f63a"]
											},
											{
												$eq: ["$Value.KillItemRepositoryId", "62c2ac2e-329e-4648-822a-e45a29a93cd0"]
											},
											{
												$eq: ["$Value.KillItemRepositoryId", "6c6adf56-1027-471c-adb4-64dbb8b81232"]
											},
											{
												$eq: ["$Value.KillItemRepositoryId", "9e728dc1-3344-4615-be7a-1bcbdd7ad4aa"]
											},
											{
												$eq: ["$Value.KillItemRepositoryId", "a2c56798-026f-4d0b-9480-de0d2525a119"]
											},
											{
												$eq: ["$Value.KillItemRepositoryId", "ac2b7cf1-523a-4aee-a73b-5b2ccfd6079f"]
											},
											{
												$eq: ["$Value.KillItemRepositoryId", "b2321154-4520-4911-9d94-9256b85e0983"]
											},
											{
												$eq: ["$Value.KillItemRepositoryId", "c61fea13-aaf0-4173-8fd0-9c34b43638ae"]
											},
											{
												$eq: ["$Value.KillItemRepositoryId", "ccc6b901-6f13-43be-88a1-6750cdb4a6ff"]
											},
											{
												$eq: ["$Value.KillItemRepositoryId", "e17172cc-bf70-4df6-9828-d9856b1a24fd"]
											},
											{
												$eq: ["$Value.KillItemRepositoryId", "e312a416-5b56-4cb5-8994-1d4bc82fbb84"]
											},
											{
												$eq: ["$Value.KillItemRepositoryId", "e82b61a6-c534-495a-bbe2-b45e9ae9a030"]
											}
										]
									}
								]
							},
							$set: ["TargetKilled", true]
						}
					],
					BodyFound: {
						Transition: "Failure"
					}
				}
			}
		},
		Tags: ["assassination", "medium"]
	}
]

module.exports = function BayHarborButcher(controller) {
	if (Math.abs(PEACOCKVER) < 7000) {
		log(LogLevel.ERROR, `[Bay Harbor Butcher] This plugin requires Peacock v7! You're on v${PEACOCKVERSTRING}!`)
		return
	}

	for (const challenge of challenges) {
		controller.challengeService.registerChallenge(challenge, "assassination", challenge.ParentLocationId, "h3")
	}

	log(LogLevel.INFO, "[Bay Harbor Butcher] Ready. (Plugin Started)")
}
