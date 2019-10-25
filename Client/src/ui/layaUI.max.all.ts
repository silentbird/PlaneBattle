
import View = laya.ui.View;
import Dialog = laya.ui.Dialog;
module ui {
	export class GameOverUI extends View {
		public bestScoreText: laya.display.Text;
		public showRank: Laya.Image;
		public scoreText: Laya.Label;
		public challenge: Laya.Image;
		public Back: Laya.Image;
		public Again: Laya.Image;

		public static uiView: any = { "type": "View", "props": { "width": 720, "top": 0, "right": 0, "left": 0, "layoutEnabled": true, "height": 1280, "bottom": 0, "alpha": 1 }, "child": [{ "type": "Image", "props": { "top": 0, "skin": "background/bg_rank.jpg", "right": 0, "left": 0, "layoutEnabled": true, "bottom": 0 } }, { "type": "Image", "props": { "y": 499, "x": 360, "skin": "img/clear_img_bg.png", "layoutEnabled": true, "centerY": -141, "centerX": 0, "anchorY": 0.5, "anchorX": 0.5 }, "child": [{ "type": "Image", "props": { "y": 321, "x": 135, "skin": "img/clear_img_highest.png" }, "child": [{ "type": "Text", "props": { "y": 14, "x": 250, "width": 227, "var": "bestScoreText", "text": "00", "height": 31, "fontSize": 30, "font": "Arial", "color": "#747474", "align": "left" } }] }, { "type": "Image", "props": { "y": 816, "x": 280, "width": 164, "var": "showRank", "skin": "img/rank_pic.jpg", "mouseThrough": true, "mouseEnabled": true, "layoutEnabled": true, "height": 37, "alpha": 0 } }] }, { "type": "Label", "props": { "width": 228, "var": "scoreText", "top": 249, "text": "7851", "layoutEnabled": true, "height": 108, "fontSize": 103, "font": "Microsoft YaHei", "color": "000000", "centerX": -8, "align": "center" } }, { "type": "Image", "props": { "var": "challenge", "skin": "img/clear_btn_challenge.png", "centerX": -2, "bottom": 764 } }, { "type": "Image", "props": { "y": 1019, "x": 169, "var": "Back", "skin": "img/clear_btn_back.png", "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Image", "props": { "y": 1019, "x": 478, "var": "Again", "skin": "img/clear_btn_resurrection.png", "anchorY": 0.5, "anchorX": 0.5 } }] };
		constructor() { super() }
		createChildren(): void {
			View.regComponent("Text", laya.display.Text);

			super.createChildren();
			this.createView(ui.GameOverUI.uiView);

		}

	}
}

module ui {
	export class HelpeUI extends View {
		public backButton: Laya.Image;

		public static uiView: any = { "type": "View", "props": { "width": 720, "top": 0, "right": 0, "left": 0, "layoutEnabled": true, "height": 1280, "bottom": 0 }, "child": [{ "type": "Image", "props": { "top": 0, "skin": "background/bg_rank.jpg", "right": 0, "left": 0, "layoutEnabled": true, "bottom": 0 } }, { "type": "Image", "props": { "skin": "img/help_img_bg.png", "layoutEnabled": true, "centerY": 0, "centerX": 0 } }, { "type": "Image", "props": { "var": "backButton", "skin": "img/help_btn_back.png", "left": 0, "layoutEnabled": true, "centerY": 0 } }] };
		constructor() { super() }
		createChildren(): void {

			super.createChildren();
			this.createView(ui.HelpeUI.uiView);

		}

	}
}

module ui {
	export class RankUI extends View {
		public bg: Laya.Image;
		public item0: Laya.Panel;
		public bestPlayer: Laya.VBox;
		public item1: Laya.Panel;
		public rankList: Laya.VBox;
		public myBestScore: Laya.Label;
		public moreRankBtn: Laya.Image;
		public title: Laya.Image;
		public challengeBtn: Laya.Image;
		public backBtn: Laya.Image;

		public static uiView: any = { "type": "View", "props": { "width": 720, "top": 0, "right": 0, "left": 0, "layoutEnabled": true, "height": 1280, "bottom": 0 }, "child": [{ "type": "Image", "props": { "var": "bg", "top": 0, "skin": "background/bg_rank.jpg", "right": 0, "left": 0, "layoutEnabled": true, "bottom": 0 } }, { "type": "Image", "props": { "y": 99, "x": 27, "skin": "img/rank_img_bg.png", "layoutEnabled": true, "centerX": 0 }, "child": [{ "type": "Panel", "props": { "y": 272, "x": 20, "width": 636, "var": "item0", "height": 100 }, "child": [{ "type": "VBox", "props": { "var": "bestPlayer" }, "child": [{ "type": "RankItem", "props": { "runtime": "ui.RankItemUI" } }] }] }, { "type": "Panel", "props": { "y": 429, "x": 20, "width": 636, "var": "item1", "vScrollBarSkin": "img/vscroll.png", "height": 447 }, "child": [{ "type": "VBox", "props": { "y": 18, "x": 8, "var": "rankList", "space": 20 }, "child": [{ "type": "RankItem", "props": { "runtime": "ui.RankItemUI" } }, { "type": "RankItem", "props": { "runtime": "ui.RankItemUI" } }, { "type": "RankItem", "props": { "runtime": "ui.RankItemUI" } }, { "type": "RankItem", "props": { "runtime": "ui.RankItemUI" } }, { "type": "RankItem", "props": { "runtime": "ui.RankItemUI" } }, { "type": "RankItem", "props": { "runtime": "ui.RankItemUI" } }] }] }, { "type": "Label", "props": { "y": 147, "x": 271, "text": "最高分数", "layoutEnabled": true, "fontSize": 30, "font": "SimHei", "color": "#ffffff", "bold": true } }, { "type": "Label", "props": { "y": 191, "x": 252, "var": "myBestScore", "text": "555555", "layoutEnabled": true, "fontSize": 48, "color": "#ffffff", "align": "center" } }, { "type": "Image", "props": { "y": 895, "x": 250, "var": "moreRankBtn", "skin": "img/rank_btn_more.png" } }] }, { "type": "Image", "props": { "y": 75, "x": 46, "var": "title", "skin": "img/rank_img_title.png", "centerX": 0 } }, { "type": "Image", "props": { "y": 1112, "var": "challengeBtn", "skin": "img/rank_btn_challenge.png", "layoutEnabled": true, "centerX": 0 } }, { "type": "Image", "props": { "var": "backBtn", "top": 18, "skin": "img/rank_btn_back.png", "left": 26, "layoutEnabled": true } }] };
		constructor() { super() }
		createChildren(): void {
			View.regComponent("ui.RankItemUI", ui.RankItemUI);

			super.createChildren();
			this.createView(ui.RankUI.uiView);

		}

	}
}

module ui {
	export class RankItemUI extends Laya.Box {
		public itemBg: Laya.Image;
		public rankingIcon: Laya.Image;
		public rankingNum: Laya.Label;
		public playerUrl: Laya.Image;
		public nickname: Laya.Label;
		public score: Laya.Label;

		public static uiView: any = { "type": "Box", "props": { "y": 0, "x": 0, "width": 601, "height": 93 }, "child": [{ "type": "Image", "props": { "y": 0, "x": 0, "var": "itemBg", "skin": "img/rank_listbg_04.png" }, "child": [{ "type": "Image", "props": { "y": 17, "x": 496, "var": "rankingIcon", "skin": "img/rank_place_04.png", "layoutEnabled": true }, "child": [{ "type": "Label", "props": { "y": 16, "x": 11, "width": 35, "var": "rankingNum", "text": "1", "layoutEnabled": true, "height": 30, "fontSize": 30, "color": "#000000", "bold": true, "align": "center" } }] }] }, { "type": "Image", "props": { "y": 7, "x": 26, "width": 78, "var": "playerUrl", "skin": "img/rank_pic.jpg", "height": 79 } }, { "type": "Label", "props": { "y": 16, "x": 117, "var": "nickname", "text": "昵称", "fontSize": 30, "color": "#d48928", "bold": true } }, { "type": "Label", "props": { "y": 48, "x": 117, "text": "分数：", "fontSize": 30, "color": "#b47d80", "bold": true }, "child": [{ "type": "Label", "props": { "y": 3, "x": 81, "width": 249, "var": "score", "text": "0000", "height": 30, "fontSize": 30, "color": "#b47d80", "bold": true, "align": "left" } }] }] };
		constructor() { super(); this.createUI(ui.RankItemUI.uiView); }
		createUI(uiData: any): void {

			laya.utils.ClassUtils.createByJson(uiData, this, this);

		}

	}
}

module ui {
	export class sceneUI extends View {
		public player: Laya.Image;
		public launchPic: Laya.Box;
		public currentScore: Laya.Label;
		public invincible: Laya.Image;
		public invincibleTime: Laya.Label;
		public invincibleText: Laya.Image;
		public invincibleNumText: Laya.Label;
		public explosion: Laya.Image;
		public explosionTime: Laya.Label;
		public explosionText: Laya.Image;
		public explosionNumText: Laya.Label;
		public bulletPower: laya.display.Text;
		public bulletSpeed: laya.display.Text;
		public nextCheckpointScore: laya.display.Text;
		public indexCheckpointScore: laya.display.Text;
		public progress: Laya.ProgressBar;
		public effectPicture_1: Laya.Image;
		public effectPicture_2: Laya.Image;
		public propTimeIcon: Laya.Image;
		public propTime: Laya.Label;

		public static uiView: any = { "type": "View", "props": { "width": 720, "value": -232, "top": 0, "right": 0, "left": 0, "layoutEnabled": true, "height": 1280, "bottom": 0 }, "child": [{ "type": "Image", "props": { "y": 1042, "x": 360, "width": 143, "var": "player", "skin": "img/main_img_plane.png", "layoutEnabled": true, "height": 128, "centerX": 0, "anchorY": 0.5, "anchorX": 0.5 }, "child": [{ "type": "Box", "props": { "visible": false, "var": "launchPic" }, "child": [{ "type": "Image", "props": { "y": 73, "x": -18, "skin": "prop/main_img_emitter.png", "scaleX": -1, "rotation": 0 } }, { "type": "Image", "props": { "y": 73, "x": 162, "skin": "prop/main_img_emitter.png" } }] }] }, { "type": "Label", "props": { "y": 153, "width": 166, "var": "currentScore", "text": "0", "layoutEnabled": true, "height": 60, "fontSize": 50, "color": "#ffffff", "centerX": 0, "bold": true, "align": "center" } }, { "type": "Image", "props": { "width": 79, "var": "invincible", "skin": "img/main_btn_invincible_2.png", "right": 27, "mouseThrough": true, "layoutEnabled": true, "hitTestPrior": true, "height": 87, "bottom": 31 }, "child": [{ "type": "Label", "props": { "visible": false, "var": "invincibleTime", "text": "60s", "strokeColor": "#efae23", "stroke": 2, "layoutEnabled": true, "fontSize": 36, "color": "#ffffff", "centerY": -8, "centerX": 0, "bold": true, "align": "center" } }, { "type": "Image", "props": { "y": 30, "x": 5, "var": "invincibleText", "skin": "img/main_btn_invincibleText.png" } }, { "type": "Image", "props": { "y": 71, "x": 56, "skin": "img/main_btn_number.png" }, "child": [{ "type": "Label", "props": { "y": 2, "var": "invincibleNumText", "valign": "middle", "text": "x2", "left": 3, "layoutEnabled": true, "fontSize": 15, "color": "#ffffff", "bold": true, "align": "center" } }] }] }, { "type": "Image", "props": { "width": 68, "var": "explosion", "skin": "img/main_btn_clear_2.png", "mouseThrough": true, "left": 30, "layoutEnabled": true, "hitTestPrior": true, "height": 94, "bottom": 30 }, "child": [{ "type": "Label", "props": { "width": 80, "visible": false, "var": "explosionTime", "text": "60s", "strokeColor": "#4e76f4", "stroke": 2, "layoutEnabled": true, "height": 43, "fontSize": 36, "color": "#fffdfd", "centerY": -8, "centerX": 0, "bold": true, "align": "center" } }, { "type": "Image", "props": { "y": 30, "x": 0, "var": "explosionText", "skin": "img/main_btn_clearText.png" } }, { "type": "Image", "props": { "y": 72, "x": 57, "skin": "img/main_btn_number.png" }, "child": [{ "type": "Label", "props": { "y": 2, "width": 20, "var": "explosionNumText", "valign": "middle", "text": "x2", "left": 0, "layoutEnabled": true, "height": 15, "fontSize": 15, "color": "#ffffff", "bold": true, "align": "center" } }] }] }, { "type": "Image", "props": { "top": 25, "skin": "img/main_plane_info.png", "left": 19, "layoutEnabled": true }, "child": [{ "type": "Text", "props": { "y": 48, "x": 94, "width": 89, "var": "bulletPower", "valign": "middle", "text": "100%", "height": 20, "fontSize": 20, "color": "#ffffff", "bold": true, "align": "left" } }, { "type": "Text", "props": { "y": 6, "x": 111, "width": 76, "var": "bulletSpeed", "valign": "middle", "text": "10", "height": 19, "fontSize": 20, "color": "#fbfbfb", "bold": true, "align": "left" } }] }, { "type": "Text", "props": { "y": 261, "x": 360, "width": 166, "visible": false, "var": "nextCheckpointScore", "text": "text", "height": 12, "color": "#ffffff", "align": "left" } }, { "type": "Text", "props": { "y": 261, "x": 354, "visible": false, "text": "/", "color": "#ffffff" } }, { "type": "Text", "props": { "y": 261, "x": 182, "width": 169, "visible": false, "var": "indexCheckpointScore", "text": "text", "height": 12, "color": "#ffffff", "align": "right" } }, { "type": "ProgressBar", "props": { "y": 220, "width": 342, "value": 0, "skin": "img/progressBar.png", "layoutEnabled": true, "height": 29, "centerX": 0 }, "child": [{ "type": "ProgressBar", "props": { "y": 6, "x": 6, "width": 329, "var": "progress", "value": 1, "skin": "img/progressBar.png", "scaleY": 0.6, "height": 29 } }, { "type": "Image", "props": { "y": -9, "x": -37, "skin": "img/main_bar_03.png" } }, { "type": "Image", "props": { "y": -9, "x": 330, "skin": "img/main_bar_04.png" } }] }, { "type": "Image", "props": { "visible": false, "var": "effectPicture_1", "top": 0, "skin": "img/main_warning.png", "right": 0, "left": 0, "layoutEnabled": true, "bottom": 0, "alpha": 1 } }, { "type": "Image", "props": { "visible": false, "var": "effectPicture_2", "top": 0, "skin": "img/main_warning_02.png", "right": 0, "left": 0, "layoutEnabled": true, "bottom": 0, "alpha": 1 } }, { "type": "Image", "props": { "y": 257, "x": 318, "width": 36, "visible": false, "var": "propTimeIcon", "skin": "prop/main_icon_launcher.png", "height": 36 }, "child": [{ "type": "Label", "props": { "y": -2, "x": 47, "var": "propTime", "text": "20", "fontSize": 36, "color": "#ffffff", "bold": true } }] }] };
		constructor() { super() }
		createChildren(): void {
			View.regComponent("Text", laya.display.Text);

			super.createChildren();
			this.createView(ui.sceneUI.uiView);

		}

	}
}

module ui {
	export class StartSceneUI extends View {
		public bg: Laya.Image;
		public helpButton: Laya.Image;
		public maxScore: Laya.Label;
		public maxScoreText: Laya.Label;
		public shareButton: Laya.Image;
		public beginButton: Laya.Image;
		public logo: Laya.Image;
		public signButton: Laya.Image;
		public rankingButton: Laya.Image;

		public static uiView: any = { "type": "View", "props": { "y": 0, "width": 720, "top": 0, "right": 0, "left": 0, "layoutEnabled": true, "height": 1280, "bottom": 0 }, "child": [{ "type": "Image", "props": { "var": "bg", "top": 0, "skin": "background/bg_start.jpg", "right": 0, "left": 0, "layoutEnabled": true, "bottom": 0 } }, { "type": "Image", "props": { "width": 56, "var": "helpButton", "top": 35, "skin": "img/start_btn_help.png", "left": 33, "layoutEnabled": true, "height": 82 } }, { "type": "Label", "props": { "width": 236, "var": "maxScore", "top": 512, "text": "当前最高分：", "layoutEnabled": true, "height": 44, "fontSize": 36, "font": "Helvetica", "color": "#ffb739", "centerX": -28, "bold": true, "align": "left" }, "child": [{ "type": "Label", "props": { "y": 3, "x": 203, "width": 145, "var": "maxScoreText", "text": "0", "layoutEnabled": true, "height": 39, "fontSize": 36, "color": "#ffffff", "bold": true, "align": "left" } }] }, { "type": "Image", "props": { "y": 794, "var": "shareButton", "skin": "img/start_btn_share.png", "layoutEnabled": true, "centerX": 0 } }, { "type": "Image", "props": { "y": 670, "var": "beginButton", "skin": "img/start_btn_shartgame.png", "layoutEnabled": true, "centerX": 0 } }, { "type": "Image", "props": { "y": 200, "var": "logo", "skin": "img/start_img_logo.png", "layoutEnabled": true, "centerX": 0 } }, { "type": "Box", "props": { "y": 999, "x": 360, "width": 470, "layoutEnabled": true, "height": 111, "centerX": 0, "anchorY": 0.5, "anchorX": 0.5 }, "child": [{ "type": "Image", "props": { "y": 48, "x": 366, "var": "signButton", "skin": "img/start_btn_sign.png", "right": 0, "layoutEnabled": true, "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Image", "props": { "y": 48, "x": 104, "var": "rankingButton", "skin": "img/start_btn_rank.png", "left": 0, "layoutEnabled": true, "anchorY": 0.5, "anchorX": 0.5 } }] }] };
		constructor() { super() }
		createChildren(): void {

			super.createChildren();
			this.createView(ui.StartSceneUI.uiView);

		}

	}
}