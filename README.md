# ddc-fuzzy filters

https://user-images.githubusercontent.com/5019902/136666268-0953a435-f331-48e6-9502-490d40b55693.mp4

Fuzzy matching filters for [ddc.vim](https://github.com/Shougo/ddc.vim)

The de facto standard filters, [match_head](https://github.com/Shougo/ddc-match_head) and [sorter_rank](https://github.com/Shougo/ddc-sorter_rank), behave like the other completion such as VSCode. They suggest terms containing an input as a substring. However, they omit words with a typo. It means that we cannot obtain a suggestion word from wrd. Moreover, it is hard to select a long word with a short input.

Our filters fix this problem with the fuzzy filter that hahaves like CtrlP.

To install our filters,

```viml
Plug 'tani/ddc-fuzzy'
```

To use our filters,

```viml
call ddc#custom#patch_global('completionMenu', 'pum.vim')
call ddc#custom#patch_global('sourceOptions', {
  \   '_': {
  \     'matchers': ['matcher_fuzzy'],
  \     'sorters': ['sorter_fuzzy'],
  \     'converters': ['converter_fuzzy']
  \   }
  \ })
```

This work is licensed under the MIT License.
Copyright &copy; 2021 TANIGUCHI Masaya. All rights reserved.
