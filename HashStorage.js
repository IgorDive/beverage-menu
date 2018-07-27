(function () {
	"use strict"

	function THashStorageParent () {
		var self = this;
		var hash = {};

		self.AddValue = function (Key, Value) {
			hash[Key] = Value;
		}
		self.GetValue = function (Key) {
			return hash[Key];
		}
		self.DeleteValue = function (Key) {
			if (Key in hash) {
				delete hash[Key];
				return true;
			} else {
				return false;
			}
		}
		self.GetKeys = function () {
			return Object.keys(hash);
		}
	}
	window.THashStorage = THashStorageParent;

}) ();